class Api::MessagesController < ApplicationController
    def index
      
      @messages = Message.where('id > ?',params[:id])
    #   @group = Group.find(params[:group_id])
    #   @messages = @group.messages.includes(:user).where('id > ?', params[:message][:id]) 
        respond_to do |format|
             format.html
             format.json{ }
         end
    end
  end
  