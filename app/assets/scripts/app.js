import $ from 'jquery';

$(document).ready(function(){	
    getPostList();	
});	

function getPostList(type) {
    var list = $('#posts-list'); 
    var url = 'https://spreadsheets.google.com/feeds/list/1LEvjslFWvDRbIXuN0G6sIkDcNZWiFraTfslSdKiNV3E/od6/public/values?alt=json';
 
    $.getJSON(url,function(data){
        $.each(data.feed.entry,function(i,val){
            var article = val.gsx$article.$t;
            var date = val.gsx$date.$t;
            var author = val.gsx$author.$t;
            var url = val.gsx$url.$t;
              
            var postItem = "";
            postItem += ('<li>');
            postItem += ('<a href="' + url + '" class="post" target="_blank">');
            postItem += ('<h4 class="post__title">' + article + '</h4>');
            postItem += ('<span class="post__author">' + author + '</span>');
            postItem += ('<time datetime="2018-01-15" class="post__time">' + date + '</time>');
            postItem += ('</a>');
            postItem += ('</li>');
            
            $('.loader').hide();
            list.append(postItem);
            $('#posts-list').fadeIn(1000);
            
        });
    });
  }; 
