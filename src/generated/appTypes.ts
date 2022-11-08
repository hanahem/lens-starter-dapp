export type Tokens = { accessToken: string; refreshToken: string }

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[]
  }
}
export const result: PossibleTypesResultData = {
  possibleTypes: {
    CollectModule: [
      'FeeCollectModuleSettings',
      'FreeCollectModuleSettings',
      'LimitedFeeCollectModuleSettings',
      'LimitedTimedFeeCollectModuleSettings',
      'RevertCollectModuleSettings',
      'TimedFeeCollectModuleSettings',
      'UnknownCollectModuleSettings',
    ],
    FollowModule: [
      'FeeFollowModuleSettings',
      'ProfileFollowModuleSettings',
      'RevertFollowModuleSettings',
      'UnknownFollowModuleSettings',
    ],
    MainPostReference: ['Mirror', 'Post'],
    MentionPublication: ['Comment', 'Post'],
    MirrorablePublication: ['Comment', 'Post'],
    Notification: [
      'NewCollectNotification',
      'NewCommentNotification',
      'NewFollowerNotification',
      'NewMentionNotification',
      'NewMirrorNotification',
    ],
    ProfileMedia: ['MediaSet', 'NftImage'],
    ProxyActionStatusResultUnion: [
      'ProxyActionError',
      'ProxyActionQueued',
      'ProxyActionStatusResult',
    ],
    Publication: ['Comment', 'Mirror', 'Post'],
    PublicationForSale: ['Comment', 'Post'],
    PublicationSearchResultItem: ['Comment', 'Post'],
    ReferenceModule: [
      'FollowOnlyReferenceModuleSettings',
      'UnknownReferenceModuleSettings',
    ],
    RelayResult: ['RelayError', 'RelayerResult'],
    SearchResult: ['ProfileSearchResult', 'PublicationSearchResult'],
    TransactionResult: ['TransactionError', 'TransactionIndexedResult'],
  },
}
