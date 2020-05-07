require 'test_helper'

class TypingControllerTest < ActionDispatch::IntegrationTest
  # test "the truth" do
  #   assert true
  # end
  prompt_context() {
    prompt_segment $CURRENT_BG default  "▙ ▞◼▖▜ ▚"
  }
end
