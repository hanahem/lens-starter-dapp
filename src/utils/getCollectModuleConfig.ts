const getCollectModuleConfig = (
  collectModule: string
): { type: string; description: string } => {
  switch (collectModule) {
    case 'FeeCollectModule':
      return {
        type: 'collectModule',
        description:
          'Allow you to collect any publication by paying the specified fees.',
      }
    case 'TimedFeeCollectModule':
      return {
        type: 'collectModule',
        description:
          'Allow you to collect any publication within the time limit specified.',
      }
    case 'LimitedFeeCollectModule':
      return {
        type: 'collectModule',
        description:
          'Allow you to collect any publication with the collect limit specified.',
      }
    case 'LimitedTimedFeeCollectModule':
      return {
        type: 'collectModule',
        description:
          'Allow you to collect any publication with the time and collect limit specified.',
      }
    default:
      return {
        type: '',
        description: '',
      }
  }
}

export default getCollectModuleConfig
