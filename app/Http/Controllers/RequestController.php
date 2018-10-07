<?php

namespace App\Http\Controllers;
use App\EnsemblClasses\RequestFacade;
use App\EnsemblClasses\Clean;
use Request;


class RequestController extends Controller
{
    private $sendData;
    private $inputs;
    private $cleanData;
    public function __construct()
    {

        $this->inputs = Request::all();
        $this->cleanData = new Clean();

    }
    public function index()
    {
        //checking if data coming has post[url] and post[method]
        if(!$this->cleanData->ValidateRequest($this->inputs)){
          throw new \Exception("Error Processing Request.
           Request does not contain right parameters", 1);

        }

        //sendRequest
        $this->sendData = new RequestFacade($this->inputs["url"],$this->inputs["method"]);
        return $this->sendData->send();



    }
}
