class BattleRecordsController < ApplicationController

  def create
    msg = BattleRecord.new(battel_params)
  end


  private
  def battel_params
    params.require(:message).permit(:time, :accuracy)
  end

end
