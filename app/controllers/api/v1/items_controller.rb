class Api::V1::ItemsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    items = Item.all

    if items != nil
        render json: { items: items }
    else
      render json: { items: nil }
    end
  end

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
