class ItinerariesController < ApplicationController
  before_action :set_itinerary, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:index, :show, :create, :update, :destroy]
#is the above needed?

  def index
    @itineraries = Itinerary.all

    render json: @itineraries
  end

  def create
    @trip = Trip.find(params[:trip_id])
    @itinerary = Itinerary.where(trip_id: @trip.id).new(itinerary_params)

    if @itinerary.save
      render json: @itinerary, status: :created
    else
      render json: @itinerary.errors, status: :unprocessable_entity
    end
  end

  def update
    if @itinerary.update(itinerary_params)
      render json: @itinerary
    else
      render json: @itinerary.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @itinerary.destroy
  end

  private
    def set_itinerary
      @itinerary = Itinerary.find(params[:id])
    end

    def itinerary_params
      params.require(:itinerary).permit(:name, :location, :date_start, :trip_id)
    end
end
