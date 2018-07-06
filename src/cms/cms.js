import CMS from 'netlify-cms'

import BlogPostPreview from './preview-templates/BlogPostPreview'

CMS.registerPreviewStyle('/style.css')
CMS.registerPreviewTemplate('blog', BlogPostPreview)
