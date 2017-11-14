<template>
  <div class="modal fade" id="ModalBox" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
            aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" v-text="title"></h4>
        </div>
        <div class="modal-body" v-html="con" :style="boxHeight"></div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
          <button type="button" class="btn btn-warning" data-dismiss="modal">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  let VM
  import {getHeight, windowOnresize} from './base'
  let height = getHeight(0) - 187
  export default {
    props: {
      title: {
        type: String
      },
      con: {
        type: String
      }
    },
    data() {
      return {
        boxHeight: 'height:' + height + 'px'
      }
    },
    mounted() {
      VM = this
      VM.windowOnresize()
    },
    methods: {
      windowOnresize() {
        windowOnresize(() => {
          let height = getHeight(0) - 187
          VM.boxHeight = 'height:' + height + 'px'
        })
      }
    }
  }
</script>

<style scoped>
  .modal-body {
    overflow-x: hidden;
    overflow-y: auto;
  }

  @media (min-width: 768px) {
    .modal-dialog {
      width: 700px;
    }
  }
</style>
