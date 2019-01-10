@extends('layouts.app')

@section('content')
<!-- <example-component> </example-component> -->
<pagina tamanho="4">
    <painel titulo="Dashboard">
        Teste
        <div class="row">
            <div class="col-md-4 col-sm-4 col-xs-12">
                <caixa qtde="80" titulo="Artigos" url="/" cor="orange" icone="ion ion-pie-graph"></caixa>        
            </div>
            <div class="col-md-4 col-sm-4 col-xs-12">
                <caixa qtde="1500" titulo="Usuarios" url="/" cor="blue" icone="ion ion-person-stalker"></caixa>    
            </div> 
            <div class="col-md-4 col-sm-4 col-xs-12">
                <caixa qtde="3" titulo="Autores" url="/" cor="red" icone="ion ion-person"></caixa>   
            </div> 
        </div>
    </painel>  
</pagina>
@endsection
