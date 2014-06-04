all: grunt wrap-script minify-script

include ../../build/modules.mk

MODULE = utils
SOURCE_SCRIPT_FOLDER = .

grunt:
	grunt