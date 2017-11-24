$(document).ready(function()
{
    $("#submit").click(function(){
        if($('#searchLang').val() == '')
        {
            alert('Please write a language to search for!');
        }
        else
            {
               $("#loader").fadeToggle(500);
               var language = $("#searchLang").val(); 
               //Make a request from github
               $.ajax({ url:'https://api.github.com/search/repositories?q=language:'+language+'&sort=stars&order=desc&page=1&per_page=100',
               }).done(function(final)
               {

                  $('#repoInfo').empty();
                  $("#loader").hide();
                   for(i=0;i<100;i++)
                   {
                       $('#repoInfo').append(`

                    <div class="panel panel-default animated fadeIn">

                        <div class="panel-heading">
                            <span class="titles">Owner :</span>
                            <a href="${final.items[i].owner.html_url}">${final.items[i].owner.login}</a> &nbsp; 
                            <img src="${final.items[i].owner.avatar_url}" alt="Lights" class=" w3-circle w3-image w3-bar-item w3-mobile w3-card-4 ownerImg" style="width:100%;max-width:25px;">
                        </div>

                          <div class="panel-body"><span class="titles">Repository URL</span>: 
                            <a href="${final.items[i].html_url}">${final.items[i].html_url}</a><br> <span class="titles">Project description: </span>
                            ${final.items[i].description};
                        </div> 
                    </div>


                    `);
                   }

               })
            }
 
    })
   
});
