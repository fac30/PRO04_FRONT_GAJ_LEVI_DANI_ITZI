variable "region" {
  default = "eu-west-2"
}

variable "Name" {
  default = "canvas-collective"
}

variable "index_html_path" {
  description = "path to the index.html file"
  type        = string
  default     = "dist/index.html"
}

variable "assets_folder_path" {
  default     = "dist/assets"
}
