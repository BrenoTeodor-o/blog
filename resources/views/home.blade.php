@extends('layouts.app')

@section('content')
<!-- <example-component> </example-component> -->
<div id="painel">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <painel titulo="Dashboard">
                    Teste
                    <div class="row">
                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <painel titulo="Dashboard 1">
                                Teste
                            </painel>        
                        </div>
                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <painel titulo="Dashboard 2">
                                Teste
                            </painel>        
                        </div> 
                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <painel titulo="Dashboard 3">
                                Teste
                            </painel>        
                        </div> 
                    </div>
                </painel>              
            </div> 
        </div>
    </div>
</div>
@endsection
