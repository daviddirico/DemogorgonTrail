class Api::V1::ItemsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def show
    id = params[:id]
    item = Item.find_by(id: id)

    if item != nil
      render json: { item: item }
    else
      render json: { item: nil }
    end
  end
end
