$(document).ready(function() {
  $.ajax({
    url: "/getdata.php",
    dataType: "json",
    success: function(data) {
      console.log(data)
      // Loop through the data and generate HTML for each article
      $.each(data, function(index, element) {
        var postId = element.id;
        var tags = "";
        // Split the tags into an array and create a separate span element for each tag
        var tagArray = element.tags.split(",");
        $.each(tagArray, function(tagIndex, tagElement) {
          tags += "<span class='tag'>" + tagElement.trim() + "</span> ";
        });
        // Set the HTML for the article elements
        $(".article-container[data-post-id='" + postId + "'] .article-link").attr("href", window.location.origin + '/' + element.slug);        
        $(".article-container[data-post-id='" + postId + "'] .article-image").attr("src", element.image_url);
        $(".article-container[data-post-id='" + postId + "'] .tag-container").html(tags);
        $(".article-container[data-post-id='" + postId + "'] .article-title").html(element.title);
        $(".article-container[data-post-id='" + postId + "'] .article-subtitle").html(element.sub_title);
        $(".article-container[data-post-id='" + postId + "'] .article-author").html(element.author);
      });
    }
  });
});
