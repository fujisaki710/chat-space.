class Api::MessagesController < ApplicationController
    def index
    #    @new_message = @group.messages.where('id > ?', params[:data])
    # @group = Group.find(params[:group_id])
    # @messages = @group.messages.includes(:user).where('id > ?', params[:id]) 
        respond_to do |format|
            format.html
            format.json{@messages = Message.where('id > ?',params[:id]) }
        end
    end
  end
  