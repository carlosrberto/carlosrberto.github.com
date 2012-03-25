module PostMore
  def postmorefilter(input, url, text)
    if input.include? "<p><!--more--></p>"
      input.split("<p><!--more--></p>").first + "<p class='more'><a href='#{url}'>#{text}</a></p>"
    else
      input
    end
  end
end

Liquid::Template.register_filter(PostMore)
