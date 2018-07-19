import CMS from 'netlify-cms'

import BlogPostPreview from './preview-templates/BlogPostPreview'

//-- path is absolute from built project
//-- Gatsby compiles .css files to `styles.css`
CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('blog', BlogPostPreview)
