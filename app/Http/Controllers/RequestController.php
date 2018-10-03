<?php

namespace App\Http\Controllers;
use App\EnsemblClasses\RequestFacade;
use Request;


class RequestController extends Controller
{
    private $sendData;
    private $inputs;
    public function __construct()
    {

        $this->inputs = Request::all();

    }
    public function index()
    {
      //sendRequest

        $this->sendData = new RequestFacade($this->inputs["url"],$this->inputs["method"]);
        return $this->sendData->send();



    }
}
