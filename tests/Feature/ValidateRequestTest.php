<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\EnsemblClasses\Clean;

class CouponTest extends TestCase
{
    /**
     * test post request validation
     *
     * @return void
     */
     private $Clean;
     private $input;

    public function testRequestvalidation()
    {
        //checking if data coming has post[url] and post[method]
        $this->input=array( 'url' => "http://rest.ensembl.org/lookup/symbol/homo_sapiens/BRCA2.json?;expand=1",
                            'method' => "GET"
                         );
        $this->Clean = new Clean();
        $this->assertTrue($this->Clean->ValidateRequest($this->input));

    }
}
