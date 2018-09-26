new Vue({
    el:'#app',
    data:{
        notos:[
            {"text":'笔记内容',"time":'时间戳'},
            {"text":'笔记内容',"time":'时间戳'},
            {"text":'笔记内容',"time":'时间戳'}
        ]
    },
    computed:{
        title:function(){
        return _.truncate(this.notos[0].text, {'length': 24,});}
        }
}) 