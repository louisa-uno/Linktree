require 'net/http'
require 'uri'
require 'fileutils'

CSS_URL = "https://use.fontawesome.com/releases/v5.15.4/css/all.css"
CSS_DIR = "assets/css"
LOCAL_FILE = "#{CSS_DIR}/fontawesome.css"

Jekyll::Hooks.register :site, :pre_render do |_site|
FileUtils.mkdir_p(CSS_DIR)
uri = URI(CSS_URL)
response = Net::HTTP.get(uri)
File.write(LOCAL_FILE, response)
end
