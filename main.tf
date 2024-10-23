terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.72.1"
    }
  }
}


provider "aws" {
  region = var.region
}

resource "aws_s3_bucket" "canvas-collective" {
  bucket = var.Name

  website {
    index_document = "index.html"
  }
}

resource "aws_s3_bucket_public_access_block" "block-rules" {
  bucket = aws_s3_bucket.canvas-collective.bucket

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_object" "entry-point" {
  bucket = aws_s3_bucket.canvas-collective.bucket
  key    = "index.html"
  source = var.index_html_path
  acl    = "public-read"
}

resource "aws_s3_bucket_object" "canvas-collective-assets" {
  for_each = fileset("${path.root}/dist/assets", "*")

  bucket = aws_s3_bucket.canvas-collective.bucket
  key    = each.value
  source = "${path.root}/dist/assets/${each.value}"
  acl    = "public-read"
}

resource "aws_s3_bucket_policy" "cc-policy" {
  bucket = aws_s3_bucket.canvas-collective.bucket
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "arn:aws:s3:::${var.Name}/*"
      }
    ]
  })
}
