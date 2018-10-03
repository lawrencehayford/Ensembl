<?php
namespace App\EnsemblClasses;
use App\EnsemblClasses\Clean;

class RequestFacade {

  private $responseData;
  private $curl;
  private $url;
  private $method;

  public function __construct($url,$method)
  {
    /**
     *  setting up curl
     *
     * @return void
     */

     $this->curl = curl_init();
     $this->setPostUrlAndMethod($url,$method);
     $this->setUpCurl();

  }
  public function send()
  {
    /**
     * sending curl request
     *
     * @return void
     */
     try{

           $response = curl_exec($this->curl);
           $err = curl_error($this->curl);
           curl_close($this->curl);
           if ($err) {
             return "cURL Error #:" . $err;
           } else {
             return $response;
           }

     }catch(Exception $ex){

       throw new \Exception("Error Processing Request ".$ex->getMessage(), 1);

     }

  }

  public function setUpCurl()
  {

      curl_setopt_array($this->curl, array(
        CURLOPT_URL => $this->url,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => $this->method,
        CURLOPT_HTTPHEADER => array(
          "Cache-Control: no-cache"
        ),
      ));
  }

  public function setPostUrlAndMethod($url,$method){

    $this->url=$url;
    $this->method=$method;
  }




}
