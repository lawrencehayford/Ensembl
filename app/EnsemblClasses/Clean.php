<?php
namespace App\EnsemblClasses;
class Clean {

  public function Check($var)
  {
    /**
     * this cleans input values
     *
     * @return string
     */
    return strip_tags(trim($var));
  }

  public function ValidateRequest($input){
    if(isset($input["url"]) && isset($input["method"])) return true;

    return false;

  }
}
