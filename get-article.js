$(document).ready(function() {
    const articleSlug = window.location.pathname.split('/').pop();
    $.ajax({
      url: '/get-article.php?slug=' + encodeURIComponent(articleSlug),
      dataType: 'json',
      success: function(data) {
        $.each(data, function(index, element) {

          // Grab tags and seperate with comma, then create new element
          const tags = element.tags.split(',').map(function(tag) {
            return '<span class="tag">' + tag.trim() + '</span>';
          }).join(' ');
  
          const articleBody = element.content
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .replace(/--(.*?)--/g, '<div style="text-align:center">$1</div>')
          .split(/\n\s+\n/)
          .filter(paragraph => paragraph.trim() !== '')
          .map(paragraph => `<p>${paragraph.trim()}</p>`)
          .join('');
                  
          // Set og meta properties
          $("meta[property='og\\:title").attr("content", element.title);
          $("meta[property='og\\:description").attr("content", element.sub_title);
          $("meta[property='og\\:url").attr("content", "https://thedc.blog/" + element.slug);
          $("meta[property='og\\:image").attr("content", element.image_url);

          // Set the HTML for the article elements
          $('.tag-container').html(tags);
          $('.headline').html(element.title);
          $('.subtitle').html(element.sub_title);
          $('.author').html(element.author);
          $('.image').attr('src', element.image_url);
          $('.article-body').html(articleBody);
        });
      }
    });
  });
  