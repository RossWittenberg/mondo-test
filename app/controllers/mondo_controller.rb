class MondoController < ApplicationController

	before_action :authenticate_admin!, only: [:backend]

	def frontend
		redirect_to :root
	end

	def backend

	end

end