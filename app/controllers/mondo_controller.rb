class MondoController < ApplicationController

	before_action :authenticate_admin!, only: [:backend]

	def index

	end

	def frontend

	end

	def backend

	end

end