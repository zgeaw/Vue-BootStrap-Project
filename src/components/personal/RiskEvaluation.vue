<template>
  <div class="main">
    <MainHeader main nav active="Personal"/>
    <div class="container">
      <ol class="breadcrumb">
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/personal">客服服务</router-link>
        </li>
        <li class="active" v-text="columnTitle"></li>
      </ol>
      <div class="bgWhite news">
        <div class="row">
          <section class="col-md-12">
            <h3 class="details-title"><span v-text="columnTitle"></span><em></em></h3>
            <div class="risk-evalution">

              <div class="tit">客户信息</div>
              <table class="customer">
                <tbody>
                <tr>
                  <th>客户名称：</th>
                  <td>张三</td>
                  <th>性别：</th>
                  <td>男</td>
                  <th>证件种类：</th>
                  <td>身份证</td>
                  <th>手机号：</th>
                  <td>13987898987</td>
                </tr>
                <tr>
                  <th>证件号码：</th>
                  <td>410389819876783837</td>
                  <th>电子邮件：</th>
                  <td>cxd@163.com</td>
                  <th>生日：</th>
                  <td>2017-11-01</td>
                  <th></th>
                  <td></td>
                </tr>
                </tbody>
              </table>

              <div class="tit">问卷信息</div>
              <div class="questionnaire">
                <div class="form-group" v-for="(item, index) in riskPaper.riskPaperQuestionDtoList">
                  <label v-text="(index + 1) + '、' + item.title"></label>
                  <ul class="checkbox">
                    <li v-for="(Answer, Index) in item.riskPaperQuestionOptionDtoList">
                      <label :class="{active: Answer.checked}" @click="selectAnswer(Answer, index, Index)">
                        <span class="checked"></span>
                        <span v-text="Answer.caption"></span>
                      </label>
                    </li>
                  </ul>
                </div>
                <p class="score">
                  <template v-if="totalScore">
                    答题得分：<span class="red" v-text="form.score"></span>
                  </template>
                  <template v-if="totalScore">
                    风评等级：<span v-text="riskLevelText"></span>
                  </template>
                </p>
              </div>
              <div class="text-center">
                <div class="row">
                  <div class="col-md-2 col-md-offset-5">
                    <button type="button" class="btn btn-warning btn-block" @click="save">提交</button>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </div>
      </div>
    </div>
    <MainFooter/>
  </div>
</template>

<script>
  let VM
  import MainHeader from '../common/MainHeader'
  import MainFooter from '../common/MainFooter'
  import {siteConfig, arcAlert} from '../common/base'
  import UpLoad from '../common/UpLoad'
  export default {
    components: {MainHeader, MainFooter, UpLoad},
    mounted() {
      VM = this
      siteConfig.setTitle(siteConfig.nav[12])
    },
    data() {
      return {
        columnTitle: siteConfig.nav[12],
        totalScore: 0,
        riskLevelText: "",
        form: {
          riskLevel: "",
          paperId: "",
          answer: "",
          score: 0
        },
        riskPaper: {
          riskLevelSetting: "0,20,36,53,82,100",//评分标准(35,55,70,85,100)
          riskPaperQuestionDtoList: [
            {
              "id": 179,
              "paperId": "000000005e16e4a1015e180c6c090000",
              "questionSeq": 1,
              "title": "您的主要收入来源是（ ）",
              "questionType": 1,
              "remark": "",
              "creator": 1,
              "createTime": "2017-08-25 14:20:21",
              "lastUpdate": "2017-08-25 14:20:21",
              "riskPaperQuestionOptionDtoList": [
                {
                  "id": 688,
                  "paperId": "000000005e16e4a1015e180c6c090000",
                  "questionSeq": 1,
                  "optionSeq": "1",
                  "caption": "工资、劳务报酬",
                  "score": 8,
                  "checked": 0,
                  "remark": "",
                  "creator": 1,
                  "createTime": "2017-08-25 14:20:21",
                  "lastUpdate": "2017-08-25 14:20:21"
                },
                {
                  "id": 689,
                  "paperId": "000000005e16e4a1015e180c6c090000",
                  "questionSeq": 1,
                  "optionSeq": "2",
                  "caption": "生产经营所得",
                  "score": 6,
                  "checked": 0,
                  "remark": "",
                  "creator": 1,
                  "createTime": "2017-08-25 14:20:21",
                  "lastUpdate": "2017-08-25 14:20:21"
                },
                {
                  "id": 690,
                  "paperId": "000000005e16e4a1015e180c6c090000",
                  "questionSeq": 1,
                  "optionSeq": "3",
                  "caption": "利息、股息、转让等金融资性资产收入",
                  "score": 3,
                  "checked": 0,
                  "remark": "",
                  "creator": 1,
                  "createTime": "2017-08-25 14:20:21",
                  "lastUpdate": "2017-08-25 14:20:21"
                },
                {
                  "id": 691,
                  "paperId": "000000005e16e4a1015e180c6c090000",
                  "questionSeq": 1,
                  "optionSeq": "4",
                  "caption": "出租、出售房地产等非金融性资产收入",
                  "score": 3,
                  "checked": 0,
                  "remark": "",
                  "creator": 1,
                  "createTime": "2017-08-25 14:20:21",
                  "lastUpdate": "2017-08-25 14:20:21"
                },
                {
                  "id": 692,
                  "paperId": "000000005e16e4a1015e180c6c090000",
                  "questionSeq": 1,
                  "optionSeq": "5",
                  "caption": "无固定收入",
                  "score": 0,
                  "checked": 0,
                  "remark": "",
                  "creator": 1,
                  "createTime": "2017-08-25 14:20:21",
                  "lastUpdate": "2017-08-25 14:20:21"
                }
              ]
            },
            {
              "id": 180,
              "paperId": "000000005e16e4a1015e180c6c090000",
              "questionSeq": 2,
              "title": "您的家庭可支配年收入为（折合人民币） (     )",
              "questionType": 1,
              "remark": "",
              "creator": 1,
              "createTime": "2017-08-25 14:20:21",
              "lastUpdate": "2017-08-25 14:20:21",
              "riskPaperQuestionOptionDtoList": [
                {
                  "id": 693,
                  "paperId": "000000005e16e4a1015e180c6c090000",
                  "questionSeq": 2,
                  "optionSeq": "1",
                  "caption": "50万元以下",
                  "score": 1,
                  "checked": 0,
                  "remark": "",
                  "creator": 1,
                  "createTime": "2017-08-25 14:20:21",
                  "lastUpdate": "2017-08-25 14:20:21"
                },
                {
                  "id": 694,
                  "paperId": "000000005e16e4a1015e180c6c090000",
                  "questionSeq": 2,
                  "optionSeq": "2",
                  "caption": "50—100万元",
                  "score": 3,
                  "checked": 0,
                  "remark": "",
                  "creator": 1,
                  "createTime": "2017-08-25 14:20:21",
                  "lastUpdate": "2017-08-25 14:20:21"
                },
                {
                  "id": 695,
                  "paperId": "000000005e16e4a1015e180c6c090000",
                  "questionSeq": 2,
                  "optionSeq": "3",
                  "caption": "100—500万元",
                  "score": 6,
                  "checked": 0,
                  "remark": "",
                  "creator": 1,
                  "createTime": "2017-08-25 14:20:21",
                  "lastUpdate": "2017-08-25 14:20:21"
                },
                {
                  "id": 696,
                  "paperId": "000000005e16e4a1015e180c6c090000",
                  "questionSeq": 2,
                  "optionSeq": "4",
                  "caption": "500—1000万元",
                  "score": 7,
                  "checked": 0,
                  "remark": "",
                  "creator": 1,
                  "createTime": "2017-08-25 14:20:21",
                  "lastUpdate": "2017-08-25 14:20:21"
                },
                {
                  "id": 697,
                  "paperId": "000000005e16e4a1015e180c6c090000",
                  "questionSeq": 2,
                  "optionSeq": "5",
                  "caption": "1000万元以上",
                  "score": 8,
                  "checked": 0,
                  "remark": "",
                  "creator": 1,
                  "createTime": "2017-08-25 14:20:21",
                  "lastUpdate": "2017-08-25 14:20:21"
                }
              ]
            },
            {
              "id": 181,
              "paperId": "000000005e16e4a1015e180c6c090000",
              "questionSeq": 3,
              "title": "在您每年的家庭可支配收入中，可用于金融投资（储蓄存款除外）的比例为(     )",
              "questionType": 1,
              "remark": "",
              "creator": 1,
              "createTime": "2017-08-25 14:20:21",
              "lastUpdate": "2017-08-25 14:20:21",
              "riskPaperQuestionOptionDtoList": [
                {
                  "id": 698,
                  "paperId": "000000005e16e4a1015e180c6c090000",
                  "questionSeq": 3,
                  "optionSeq": "1",
                  "caption": "小于10%",
                  "score": 1,
                  "checked": 0,
                  "remark": "",
                  "creator": 1,
                  "createTime": "2017-08-25 14:20:21",
                  "lastUpdate": "2017-08-25 14:20:21"
                },
                {
                  "id": 699,
                  "paperId": "000000005e16e4a1015e180c6c090000",
                  "questionSeq": 3,
                  "optionSeq": "2",
                  "caption": "10%至25%",
                  "score": 3,
                  "checked": 0,
                  "remark": "",
                  "creator": 1,
                  "createTime": "2017-08-25 14:20:21",
                  "lastUpdate": "2017-08-25 14:20:21"
                },
                {
                  "id": 700,
                  "paperId": "000000005e16e4a1015e180c6c090000",
                  "questionSeq": 3,
                  "optionSeq": "3",
                  "caption": "25%至50%",
                  "score": 6,
                  "checked": 0,
                  "remark": "",
                  "creator": 1,
                  "createTime": "2017-08-25 14:20:21",
                  "lastUpdate": "2017-08-25 14:20:21"
                },
                {
                  "id": 701,
                  "paperId": "000000005e16e4a1015e180c6c090000",
                  "questionSeq": 3,
                  "optionSeq": "4",
                  "caption": "大于50%",
                  "score": 8,
                  "checked": 0,
                  "remark": "",
                  "creator": 1,
                  "createTime": "2017-08-25 14:20:21",
                  "lastUpdate": "2017-08-25 14:20:21"
                }
              ]
            }
          ]
        }
      }
    },
    watch: {
      "totalScore": function (Val) {
        this.riskLevelText = 'R3 进取型'
        VM.getRiskLevel(Val)
      }
    },
    methods: {
      selectAnswer(Item, Parent, Index) {//选择事件，Parent父级索引， Index索引
        let answer = {
          score: 0,
          value: []
        }
        if (VM.riskPaper.riskPaperQuestionDtoList[Parent].questionType == 1) {//单选
          VM.riskPaper.riskPaperQuestionDtoList[Parent].riskPaperQuestionOptionDtoList.map((item) => {
            item.checked = 0
          })
        }
        VM.riskPaper.riskPaperQuestionDtoList[Parent].riskPaperQuestionOptionDtoList[Index].checked = 1
        VM.riskPaper.riskPaperQuestionDtoList[Parent].answer = {
          score: VM.riskPaper.riskPaperQuestionDtoList[Parent].riskPaperQuestionOptionDtoList[Index].score,
          value: Item.questionSeq + '.' + Item.optionSeq + '.' + Item.score
        }
        VM.riskPaper.riskPaperQuestionDtoList.map((item) => {
          if (item.answer) {
            answer.score += item.answer.score
            answer.value.push(item.answer.value)
          }
        })
        VM.totalScore = VM.form.score = answer.score
        VM.form.answer = answer.value.join()
      },
      getRiskLevel(score) {//获取风险等级
        let riskLevelScore = VM.riskPaper.riskLevelSetting.split(",");
        if (score >= parseInt(riskLevelScore[0]) && score <= parseInt(riskLevelScore[1])) {
          VM.form.riskLevel = "1";
        } else if (score > parseInt(riskLevelScore[1]) && score <= parseInt(riskLevelScore[2])) {
          VM.form.riskLevel = "2";
        } else if (score > parseInt(riskLevelScore[2]) && score <= parseInt(riskLevelScore[3])) {
          VM.form.riskLevel = "3";
        } else if (score > parseInt(riskLevelScore[3]) && score <= parseInt(riskLevelScore[4])) {
          VM.form.riskLevel = "4";
        } else if (score > parseInt(riskLevelScore[4]) && score <= parseInt(riskLevelScore[5])) {
          VM.form.riskLevel = "5";
        } else {
          VM.form.riskLevel = "";
        }
      },
      save() {//提交数据
        if (VM.validate()) {
          arcAlert('提交成功')
          console.log(VM.form)//提交数据
        }
      },
      validate() {//验证题目是否答完
        let state = true
        let questionList = this.riskPaper.riskPaperQuestionDtoList
        for (let i = 0; i < questionList.length; i++) {
          var question = questionList[i]
          if (!question.answer) {
            state = false
            arcAlert("第" + question.questionSeq + "题未作答，请作答后再提交！")
            break
          }
        }
        return state
      }
    }
  }
</script>
