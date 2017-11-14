<template>
  <div class="upload">
    <div class="file row">
      <div class="col-sm-4">
        <input type="file" @change="onChange"/>
        <span class="btn btn-gary">上传文件</span>
        <span v-text="fileText" class="file-text"></span>
      </div>
      <!--<div class="col-sm-2">
        <button type="button" class="btn btn-warning">上传</button>
      </div>-->
    </div>
    <template v-for="(item, index) in imageDate">
      <div class="list">
        <span class="glyphicon glyphicon-trash" @click="delImg(index)"></span>
        <img :src="item.url" class="img">
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        file: '',
        fileText: '还没有选择任何文件',
        imageDate: [],
        imageList: [
          {url: '../../static/tmp/img01.jpg'},
          {url: '../../static/tmp/img02.jpg'},
          {url: '../../static/tmp/img03.jpg'}
        ]
      }
    },
    mounted() {
      let VM = this
      if(VM.imageDate.length == 0){
        VM.imageDate = VM.imageList
      }
    },
    methods: {
      onChange(e){
        let VM = this
        let File = e.target.files[0]
        VM.fileText = File.name
        let reader = new FileReader()
        reader.onload = (function () {
          return function (e) {
            VM.imageDate.push({url: this.result})
          }
        })(File)
        reader.readAsDataURL(File)
      },
      delImg(Index) {
        let VM = this
        VM.imageDate.splice(Index, 1)
      }
    }
  }
</script>
