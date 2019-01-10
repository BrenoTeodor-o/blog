<template>
    <div id="caixa">
<div v-bind:class="defineCor">
    <div class="inner">
        <h3>{{qtde}}</h3>

        <p>{{titulo}}</p>
    </div>
    <div class="icon">
        <!-- <i class="fa fa-shopping-cart"></i> -->
        <i v-bind:class="icone"></i>
    </div>
    <a href="#" class="small-box-footer">
    Ver mais  <i class="fa fa-arrow-circle-right"></i>
    </a>
</div>
    </div>
</template>

<script>
export default {
    props:[
        'qtde',
        'titulo',
        'cor',
        'url',
        'icone'
    ],
    computed:{
        defineCor: function(){
            return "small-box " + (this.cor || "bg-aqua")
        }
    }
}
</script>