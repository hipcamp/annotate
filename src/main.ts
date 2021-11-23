import * as core from '@actions/core'

// eslint-disable-next-line no-shadow
enum ANNOTATION_LEVEL {
  NOTICE = 'notice',
  WARN = 'warn',
  ERROR = 'error'
}

async function run(): Promise<void> {
  try {
    const level: string =
      (core.getInput('level').toLowerCase() as ANNOTATION_LEVEL) ||
      ANNOTATION_LEVEL.NOTICE
    const message: string = core.getInput('message')
    const annotationProperties: core.AnnotationProperties = {
      title: core.getInput('title'),
      file: core.getInput('file'),
      startLine: core.getInput('start-line')
        ? +core.getInput('start-line')
        : undefined,
      endLine: core.getInput('end-line')
        ? +core.getInput('end-line')
        : undefined,
      startColumn: core.getInput('start-column')
        ? +core.getInput('start-column')
        : undefined,
      endColumn: core.getInput('end-column')
        ? +core.getInput('end-column')
        : undefined
    }

    switch (level) {
      case ANNOTATION_LEVEL.NOTICE:
        core.notice(message, annotationProperties)
        break
      case ANNOTATION_LEVEL.WARN:
        core.warning(message, annotationProperties)
        break
      case ANNOTATION_LEVEL.ERROR:
        core.error(message, annotationProperties)
        break
    }
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
