function imagenes(){
    var query=$('#query').val();
    var APIkey='5aecb144012c46d3620347ed06c3c7cd';
    var url='http://api.serpstack.com/search?access_key='+APIkey+'&type=images&query='+query;
    var html1;
    $.get(url,function(data){
        console.log(data);
        data.image_results.slice(0,10).forEach(res => {
            html1+='<h5>'+res.title+'</h5><img src="'+res.image_url+'" width="100px" height="90px"></img><br>';
            $('#imagenes').html(html1);
        });
    })
}