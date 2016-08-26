class Api::BenchesController < ApplicationController
  def index
    render json: Bench.all
  end

  def create
    bench = Bench.create(bench_params)
    render json: bench
  end

  private

  def bench_params
    params.require(:bench).permit(:description, :lat, :lon)
  end
end
