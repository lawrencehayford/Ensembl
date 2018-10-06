# Ensembl-Test-Lawrence Casely-Hayford
 An application that takes in A gene symbol, A position in a protein sequence and An amino acid letter  and displays All transcripts from that gene with the given amino acid at the specified position


## Search By Gene Symbol
 ![](http://wizbizgh.com/ensembl_2.PNG)

## Search By HGVS String
  ![](http://wizbizgh.com/ensembl_1.PNG)


# Getting started

## Installation of laravel on Windows
Laravel utilizes Composer to manage its dependencies. So, before using Laravel, make sure you have Composer installed on your machine.

Download composer from https://getcomposer.org/Composer-Setup.exe

After installing composer, open your terminal and run

    composer global require "laravel/installer"

## Running application

Clone the repository

    git clone https://github.com/lawrencehayford/Ensembl.git

Switch to the repo folder

    cd Ensembl

Run application using this command

    php artisan serve

Browse http://localhost:8000 to view application

# Strategies For Testing This App

## In Development Stage

In development stage, laravel already has phpunit component installed and we write these test in tests/Feature

To run these test in development mode run the following command

Command To Run Test

    php vendor/phpunit/phpunit/phpunit

Or if php unit is set in the environmental viariables Run

    phpunit

running this line of code will show if tests were passed or failed    

## In Production Stage

In Production mode, we can run these tests automatically.
Continuous Integration (CI eg Genkins) will take the code when we push it to a version control system ( → e.g Git) and it will execute all our tests in a pre-defined build environment to make sure everything is working as expected, not only on the development machine but also in a clear production-alike environment.
