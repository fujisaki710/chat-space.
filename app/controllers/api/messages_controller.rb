class Api::MessagesController < ApplicationController
    def index
      
      @group.messages = Message.where('id > ?',params[:id])

        respond_to do |format|
             format.html
             format.json
         end
    end
  end
  