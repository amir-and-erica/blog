import CMS from 'netlify-cms'

import BlogPostPreview from './preview-templates/BlogPostPreview'

CMS.registerPreviewStyle('/../layouts/style.css')
CMS.registerPreviewTemplate('blog', BlogPostPreview)
