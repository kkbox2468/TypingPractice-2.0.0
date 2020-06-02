module DefaultUrlOptions
  
  # Including this file sets the default url options. This is useful for mailers or background jobs
  
  def default_url_options
    {
      :host => host,
      :port => port
    }
  end
  
private

  def host
    # Your logic for figuring out what the hostname should be
    '127.0.0.1'
  end
  
  def port
    # Your logic for figuring out what the port should be
    3000
  end
  
end