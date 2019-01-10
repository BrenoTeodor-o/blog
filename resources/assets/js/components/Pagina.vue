<template>
    <div class="container">
        <div class="row">
            <div v-bind:class="defineTamanho">
                <slot></slot>
            </div> 
        </div>
    </div>
</template>

<script>
export default {
    props:[
        'tamanho'
    ],
    computed:{
        defineTamanho: function() {
            if (this.tamanho >= 12) {
                return "col-lg-12 col-md-12 col-sm-12 col-xs-12"
            } if (this.tamanho <= 2) {
                return "col-lg-2 col-lg-offset-5 col-md-2 col-md-offset-5 col-sm-2 col-sm-offset-5 col-xs-2 col-xs-offset-5"
            }
            if((this.tamanho % 2) == 0){
                return "col-md-"+this.tamanho+" col-md-offset-"+((12 - this.tamanho)/2);
            }else{
                return "col-md-"+(parseInt(this.tamanho) + 1)+" col-md-offset-"+((12 - (parseInt(this.tamanho) + 1))/2);
            }
            return "col-lg-12 col-lg-offset-0 col-md-12 col-md-offset-0 col-sm-12 col-sm-offset-0 col-xs-0 col-xs-offset-0";
        }
    }
}
</script> 