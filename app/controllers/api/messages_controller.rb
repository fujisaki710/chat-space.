class Api::MessagesController < ApplicationController
    def index
      
      @messages = @group.messages.where('id > ?',params[:id])
        respond_to do |format|
             format.html
             format.json
         end
    end
  end
  