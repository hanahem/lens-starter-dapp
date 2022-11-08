import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Blockchain data scalar type */
  BlockchainData: any;
  /** Broadcast scalar id type */
  BroadcastId: any;
  /** ChainId custom scalar type */
  ChainId: any;
  /** collect module data scalar type */
  CollectModuleData: any;
  /** Contract address custom scalar type */
  ContractAddress: any;
  /** create handle custom scalar type */
  CreateHandle: any;
  /** Cursor custom scalar type */
  Cursor: any;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** Ens custom scalar type */
  Ens: any;
  /** Ethereum address custom scalar type */
  EthereumAddress: any;
  /** follow module data scalar type */
  FollowModuleData: any;
  /** handle custom scalar type */
  Handle: any;
  /** handle claim id custom scalar type */
  HandleClaimIdScalar: any;
  /** Internal publication id custom scalar type */
  InternalPublicationId: any;
  /** jwt custom scalar type */
  Jwt: any;
  /** limit custom scalar type */
  LimitScalar: any;
  /** Locale scalar type */
  Locale: any;
  /** Markdown scalar type */
  Markdown: any;
  /** mimetype custom scalar type */
  MimeType: any;
  /** Nft ownership id type */
  NftOwnershipId: any;
  /** Nonce custom scalar type */
  Nonce: any;
  /** The notification id */
  NotificationId: any;
  /** ProfileId custom scalar type */
  ProfileId: any;
  /** proxy action scalar id type */
  ProxyActionId: any;
  /** Publication id custom scalar type */
  PublicationId: any;
  /** The publication tag */
  PublicationTag: any;
  /** Publication url scalar type */
  PublicationUrl: any;
  /** The reaction id */
  ReactionId: any;
  /** reference module data scalar type */
  ReferenceModuleData: any;
  /** Query search */
  Search: any;
  /** Relayer signature */
  Signature: any;
  /** Sources custom scalar type */
  Sources: any;
  /** timestamp date custom scalar type */
  TimestampScalar: any;
  /** The tx hash */
  TxHash: any;
  /** The tx id */
  TxId: any;
  /** UnixTimestamp custom scalar type */
  UnixTimestamp: any;
  /** Url scalar type */
  Url: any;
  /** Represents NULL values */
  Void: any;
};

export type AchRequest = {
  ethereumAddress: Scalars['EthereumAddress'];
  freeTextHandle?: InputMaybe<Scalars['Boolean']>;
  handle?: InputMaybe<Scalars['CreateHandle']>;
  overrideAlreadyClaimed: Scalars['Boolean'];
  overrideTradeMark: Scalars['Boolean'];
  secret: Scalars['String'];
};

export type AllPublicationsTagsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  sort: TagSortCriteria;
  /** The App Id */
  source?: InputMaybe<Scalars['Sources']>;
};

export type ApprovedAllowanceAmount = {
  __typename?: 'ApprovedAllowanceAmount';
  allowance: Scalars['String'];
  contractAddress: Scalars['ContractAddress'];
  currency: Scalars['ContractAddress'];
  module: Scalars['String'];
};

export type ApprovedModuleAllowanceAmountRequest = {
  collectModules?: InputMaybe<Array<CollectModules>>;
  /** The contract addresses for the module approved currencies you want to find information on about the user */
  currencies: Array<Scalars['ContractAddress']>;
  followModules?: InputMaybe<Array<FollowModules>>;
  referenceModules?: InputMaybe<Array<ReferenceModules>>;
  unknownCollectModules?: InputMaybe<Array<Scalars['ContractAddress']>>;
  unknownFollowModules?: InputMaybe<Array<Scalars['ContractAddress']>>;
  unknownReferenceModules?: InputMaybe<Array<Scalars['ContractAddress']>>;
};

/** The Profile */
export type Attribute = {
  __typename?: 'Attribute';
  /** The display type */
  displayType?: Maybe<Scalars['String']>;
  /** identifier of this attribute, we will update by this id  */
  key: Scalars['String'];
  /** The trait type - can be anything its the name it will render so include spaces */
  traitType?: Maybe<Scalars['String']>;
  /** Value attribute */
  value: Scalars['String'];
};

/** The auth challenge result */
export type AuthChallengeResult = {
  __typename?: 'AuthChallengeResult';
  /** The text to sign */
  text: Scalars['String'];
};

/** The authentication result */
export type AuthenticationResult = {
  __typename?: 'AuthenticationResult';
  /** The access token */
  accessToken: Scalars['Jwt'];
  /** The refresh token */
  refreshToken: Scalars['Jwt'];
};

export type BroadcastRequest = {
  id: Scalars['BroadcastId'];
  signature: Scalars['Signature'];
};

export type BurnProfileRequest = {
  profileId: Scalars['ProfileId'];
};

export type CanCommentResponse = {
  __typename?: 'CanCommentResponse';
  result: Scalars['Boolean'];
};

export type CanMirrorResponse = {
  __typename?: 'CanMirrorResponse';
  result: Scalars['Boolean'];
};

/** The challenge request */
export type ChallengeRequest = {
  /** The ethereum address you want to login with */
  address: Scalars['EthereumAddress'];
};

export type ClaimHandleRequest = {
  /** The follow module */
  followModule?: InputMaybe<FollowModuleParams>;
  freeTextHandle?: InputMaybe<Scalars['CreateHandle']>;
  id?: InputMaybe<Scalars['HandleClaimIdScalar']>;
};

/** The claim status */
export enum ClaimStatus {
  AlreadyClaimed = 'ALREADY_CLAIMED',
  ClaimFailed = 'CLAIM_FAILED',
  NotClaimed = 'NOT_CLAIMED'
}

export type ClaimableHandles = {
  __typename?: 'ClaimableHandles';
  canClaimFreeTextHandle: Scalars['Boolean'];
  reservedHandles: Array<ReservedClaimableHandle>;
};

export type CollectModule = FeeCollectModuleSettings | FreeCollectModuleSettings | LimitedFeeCollectModuleSettings | LimitedTimedFeeCollectModuleSettings | RevertCollectModuleSettings | TimedFeeCollectModuleSettings | UnknownCollectModuleSettings;

export type CollectModuleParams = {
  /** The collect fee collect module */
  feeCollectModule?: InputMaybe<FeeCollectModuleParams>;
  /** The collect empty collect module */
  freeCollectModule?: InputMaybe<FreeCollectModuleParams>;
  /** The collect limited fee collect module */
  limitedFeeCollectModule?: InputMaybe<LimitedFeeCollectModuleParams>;
  /** The collect limited timed fee collect module */
  limitedTimedFeeCollectModule?: InputMaybe<LimitedTimedFeeCollectModuleParams>;
  /** The collect revert collect module */
  revertCollectModule?: InputMaybe<Scalars['Boolean']>;
  /** The collect timed fee collect module */
  timedFeeCollectModule?: InputMaybe<TimedFeeCollectModuleParams>;
  /** A unknown collect module */
  unknownCollectModule?: InputMaybe<UnknownCollectModuleParams>;
};

/** The collect module types */
export enum CollectModules {
  FeeCollectModule = 'FeeCollectModule',
  FreeCollectModule = 'FreeCollectModule',
  LimitedFeeCollectModule = 'LimitedFeeCollectModule',
  LimitedTimedFeeCollectModule = 'LimitedTimedFeeCollectModule',
  RevertCollectModule = 'RevertCollectModule',
  TimedFeeCollectModule = 'TimedFeeCollectModule',
  UnknownCollectModule = 'UnknownCollectModule'
}

export type CollectProxyAction = {
  freeCollect?: InputMaybe<FreeCollectProxyAction>;
};

export type CollectedEvent = {
  __typename?: 'CollectedEvent';
  profile: Profile;
  timestamp: Scalars['DateTime'];
};

/** The social comment */
export type Comment = {
  __typename?: 'Comment';
  /** ID of the source */
  appId?: Maybe<Scalars['Sources']>;
  canComment: CanCommentResponse;
  canMirror: CanMirrorResponse;
  /** The collect module */
  collectModule: CollectModule;
  /** The contract address for the collect nft.. if its null it means nobody collected yet as it lazy deployed */
  collectNftAddress?: Maybe<Scalars['ContractAddress']>;
  /** Who collected it, this is used for timeline results and like this for better caching for the client */
  collectedBy?: Maybe<Wallet>;
  /** Which comment this points to if its null the pointer too deep so do another query to find it out */
  commentOn?: Maybe<Publication>;
  /** The date the post was created on */
  createdAt: Scalars['DateTime'];
  /** This will bring back the first comment of a comment and only be defined if using `publication` query and `commentOf` */
  firstComment?: Maybe<Comment>;
  hasCollectedByMe: Scalars['Boolean'];
  /** If the publication has been hidden if it has then the content and media is not available */
  hidden: Scalars['Boolean'];
  /** The internal publication id */
  id: Scalars['InternalPublicationId'];
  /** The top level post/mirror this comment lives on */
  mainPost: MainPostReference;
  /** The metadata for the post */
  metadata: MetadataOutput;
  mirrors: Array<Scalars['InternalPublicationId']>;
  /** The on chain content uri could be `ipfs://` or `https` */
  onChainContentURI: Scalars['String'];
  /** The profile ref */
  profile: Profile;
  reaction?: Maybe<ReactionTypes>;
  /** The reference module */
  referenceModule?: Maybe<ReferenceModule>;
  /** The publication stats */
  stats: PublicationStats;
};


/** The social comment */
export type CommentCanCommentArgs = {
  profileId?: InputMaybe<Scalars['ProfileId']>;
};


/** The social comment */
export type CommentCanMirrorArgs = {
  profileId?: InputMaybe<Scalars['ProfileId']>;
};


/** The social comment */
export type CommentMirrorsArgs = {
  by?: InputMaybe<Scalars['ProfileId']>;
};


/** The social comment */
export type CommentReactionArgs = {
  request?: InputMaybe<ReactionFieldResolverRequest>;
};

/** The create burn eip 712 typed data */
export type CreateBurnEip712TypedData = {
  __typename?: 'CreateBurnEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateBurnEip712TypedDataTypes;
  /** The values */
  value: CreateBurnEip712TypedDataValue;
};

/** The create burn eip 712 typed data types */
export type CreateBurnEip712TypedDataTypes = {
  __typename?: 'CreateBurnEIP712TypedDataTypes';
  BurnWithSig: Array<Eip712TypedDataField>;
};

/** The create burn eip 712 typed data value */
export type CreateBurnEip712TypedDataValue = {
  __typename?: 'CreateBurnEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  nonce: Scalars['Nonce'];
  tokenId: Scalars['String'];
};

/** The broadcast item */
export type CreateBurnProfileBroadcastItemResult = {
  __typename?: 'CreateBurnProfileBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateBurnEip712TypedData;
};

/** The broadcast item */
export type CreateCollectBroadcastItemResult = {
  __typename?: 'CreateCollectBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateCollectEip712TypedData;
};

/** The collect eip 712 typed data */
export type CreateCollectEip712TypedData = {
  __typename?: 'CreateCollectEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateCollectEip712TypedDataTypes;
  /** The values */
  value: CreateCollectEip712TypedDataValue;
};

/** The collect eip 712 typed data types */
export type CreateCollectEip712TypedDataTypes = {
  __typename?: 'CreateCollectEIP712TypedDataTypes';
  CollectWithSig: Array<Eip712TypedDataField>;
};

/** The collect eip 712 typed data value */
export type CreateCollectEip712TypedDataValue = {
  __typename?: 'CreateCollectEIP712TypedDataValue';
  data: Scalars['BlockchainData'];
  deadline: Scalars['UnixTimestamp'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
  pubId: Scalars['PublicationId'];
};

export type CreateCollectRequest = {
  publicationId: Scalars['InternalPublicationId'];
  /** The encoded data to collect with if using an unknown module */
  unknownModuleData?: InputMaybe<Scalars['BlockchainData']>;
};

/** The broadcast item */
export type CreateCommentBroadcastItemResult = {
  __typename?: 'CreateCommentBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateCommentEip712TypedData;
};

/** The create comment eip 712 typed data */
export type CreateCommentEip712TypedData = {
  __typename?: 'CreateCommentEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateCommentEip712TypedDataTypes;
  /** The values */
  value: CreateCommentEip712TypedDataValue;
};

/** The create comment eip 712 typed data types */
export type CreateCommentEip712TypedDataTypes = {
  __typename?: 'CreateCommentEIP712TypedDataTypes';
  CommentWithSig: Array<Eip712TypedDataField>;
};

/** The create comment eip 712 typed data value */
export type CreateCommentEip712TypedDataValue = {
  __typename?: 'CreateCommentEIP712TypedDataValue';
  collectModule: Scalars['ContractAddress'];
  collectModuleInitData: Scalars['CollectModuleData'];
  contentURI: Scalars['PublicationUrl'];
  deadline: Scalars['UnixTimestamp'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
  profileIdPointed: Scalars['ProfileId'];
  pubIdPointed: Scalars['PublicationId'];
  referenceModule: Scalars['ContractAddress'];
  referenceModuleData: Scalars['ReferenceModuleData'];
  referenceModuleInitData: Scalars['ReferenceModuleData'];
};

/** The broadcast item */
export type CreateFollowBroadcastItemResult = {
  __typename?: 'CreateFollowBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateFollowEip712TypedData;
};

/** The create follow eip 712 typed data */
export type CreateFollowEip712TypedData = {
  __typename?: 'CreateFollowEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateFollowEip712TypedDataTypes;
  /** The values */
  value: CreateFollowEip712TypedDataValue;
};

/** The create follow eip 712 typed data types */
export type CreateFollowEip712TypedDataTypes = {
  __typename?: 'CreateFollowEIP712TypedDataTypes';
  FollowWithSig: Array<Eip712TypedDataField>;
};

/** The create follow eip 712 typed data value */
export type CreateFollowEip712TypedDataValue = {
  __typename?: 'CreateFollowEIP712TypedDataValue';
  datas: Array<Scalars['BlockchainData']>;
  deadline: Scalars['UnixTimestamp'];
  nonce: Scalars['Nonce'];
  profileIds: Array<Scalars['ProfileId']>;
};

/** The broadcast item */
export type CreateMirrorBroadcastItemResult = {
  __typename?: 'CreateMirrorBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateMirrorEip712TypedData;
};

/** The mirror eip 712 typed data */
export type CreateMirrorEip712TypedData = {
  __typename?: 'CreateMirrorEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateMirrorEip712TypedDataTypes;
  /** The values */
  value: CreateMirrorEip712TypedDataValue;
};

/** The mirror eip 712 typed data types */
export type CreateMirrorEip712TypedDataTypes = {
  __typename?: 'CreateMirrorEIP712TypedDataTypes';
  MirrorWithSig: Array<Eip712TypedDataField>;
};

/** The mirror eip 712 typed data value */
export type CreateMirrorEip712TypedDataValue = {
  __typename?: 'CreateMirrorEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
  profileIdPointed: Scalars['ProfileId'];
  pubIdPointed: Scalars['PublicationId'];
  referenceModule: Scalars['ContractAddress'];
  referenceModuleData: Scalars['ReferenceModuleData'];
  referenceModuleInitData: Scalars['ReferenceModuleData'];
};

export type CreateMirrorRequest = {
  /** Profile id */
  profileId: Scalars['ProfileId'];
  /** Publication id of what you want to mirror on remember if this is a comment it will be that as the id */
  publicationId: Scalars['InternalPublicationId'];
  /** The reference module info */
  referenceModule?: InputMaybe<ReferenceModuleParams>;
};

/** The broadcast item */
export type CreatePostBroadcastItemResult = {
  __typename?: 'CreatePostBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreatePostEip712TypedData;
};

/** The create post eip 712 typed data */
export type CreatePostEip712TypedData = {
  __typename?: 'CreatePostEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreatePostEip712TypedDataTypes;
  /** The values */
  value: CreatePostEip712TypedDataValue;
};

/** The create post eip 712 typed data types */
export type CreatePostEip712TypedDataTypes = {
  __typename?: 'CreatePostEIP712TypedDataTypes';
  PostWithSig: Array<Eip712TypedDataField>;
};

/** The create post eip 712 typed data value */
export type CreatePostEip712TypedDataValue = {
  __typename?: 'CreatePostEIP712TypedDataValue';
  collectModule: Scalars['ContractAddress'];
  collectModuleInitData: Scalars['CollectModuleData'];
  contentURI: Scalars['PublicationUrl'];
  deadline: Scalars['UnixTimestamp'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
  referenceModule: Scalars['ContractAddress'];
  referenceModuleInitData: Scalars['ReferenceModuleData'];
};

export type CreatePublicCommentRequest = {
  /** The collect module */
  collectModule: CollectModuleParams;
  /** The metadata uploaded somewhere passing in the url to reach it */
  contentURI: Scalars['Url'];
  /** Profile id */
  profileId: Scalars['ProfileId'];
  /** Publication id of what your comments on remember if this is a comment you commented on it will be that as the id */
  publicationId: Scalars['InternalPublicationId'];
  /** The reference module */
  referenceModule?: InputMaybe<ReferenceModuleParams>;
};

export type CreatePublicPostRequest = {
  /** The collect module */
  collectModule: CollectModuleParams;
  /** The metadata uploaded somewhere passing in the url to reach it */
  contentURI: Scalars['Url'];
  /** Profile id */
  profileId: Scalars['ProfileId'];
  /** The reference module */
  referenceModule?: InputMaybe<ReferenceModuleParams>;
};

export type CreatePublicSetProfileMetadataUriRequest = {
  /** The metadata uploaded somewhere passing in the url to reach it */
  metadata: Scalars['Url'];
  /** Profile id */
  profileId: Scalars['ProfileId'];
};

export type CreateSetDefaultProfileRequest = {
  /** Profile id */
  profileId: Scalars['ProfileId'];
};

/** The broadcast item */
export type CreateSetDispatcherBroadcastItemResult = {
  __typename?: 'CreateSetDispatcherBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateSetDispatcherEip712TypedData;
};

/** The set dispatcher eip 712 typed data */
export type CreateSetDispatcherEip712TypedData = {
  __typename?: 'CreateSetDispatcherEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateSetDispatcherEip712TypedDataTypes;
  /** The values */
  value: CreateSetDispatcherEip712TypedDataValue;
};

/** The set dispatcher eip 712 typed data types */
export type CreateSetDispatcherEip712TypedDataTypes = {
  __typename?: 'CreateSetDispatcherEIP712TypedDataTypes';
  SetDispatcherWithSig: Array<Eip712TypedDataField>;
};

/** The set dispatcher eip 712 typed data value */
export type CreateSetDispatcherEip712TypedDataValue = {
  __typename?: 'CreateSetDispatcherEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  dispatcher: Scalars['EthereumAddress'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
};

/** The broadcast item */
export type CreateSetFollowModuleBroadcastItemResult = {
  __typename?: 'CreateSetFollowModuleBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateSetFollowModuleEip712TypedData;
};

/** The set follow module eip 712 typed data */
export type CreateSetFollowModuleEip712TypedData = {
  __typename?: 'CreateSetFollowModuleEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateSetFollowModuleEip712TypedDataTypes;
  /** The values */
  value: CreateSetFollowModuleEip712TypedDataValue;
};

/** The set follow module eip 712 typed data types */
export type CreateSetFollowModuleEip712TypedDataTypes = {
  __typename?: 'CreateSetFollowModuleEIP712TypedDataTypes';
  SetFollowModuleWithSig: Array<Eip712TypedDataField>;
};

/** The set follow module eip 712 typed data value */
export type CreateSetFollowModuleEip712TypedDataValue = {
  __typename?: 'CreateSetFollowModuleEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  followModule: Scalars['ContractAddress'];
  followModuleInitData: Scalars['FollowModuleData'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
};

export type CreateSetFollowModuleRequest = {
  /** The follow module info */
  followModule: FollowModuleParams;
  profileId: Scalars['ProfileId'];
};

/** The broadcast item */
export type CreateSetFollowNftUriBroadcastItemResult = {
  __typename?: 'CreateSetFollowNFTUriBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateSetFollowNftUriEip712TypedData;
};

/** The set follow nft uri eip 712 typed data */
export type CreateSetFollowNftUriEip712TypedData = {
  __typename?: 'CreateSetFollowNFTUriEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateSetFollowNftUriEip712TypedDataTypes;
  /** The values */
  value: CreateSetFollowNftUriEip712TypedDataValue;
};

/** The set follow nft uri eip 712 typed data types */
export type CreateSetFollowNftUriEip712TypedDataTypes = {
  __typename?: 'CreateSetFollowNFTUriEIP712TypedDataTypes';
  SetFollowNFTURIWithSig: Array<Eip712TypedDataField>;
};

/** The set follow nft uri eip 712 typed data value */
export type CreateSetFollowNftUriEip712TypedDataValue = {
  __typename?: 'CreateSetFollowNFTUriEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  followNFTURI: Scalars['Url'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
};

export type CreateSetFollowNftUriRequest = {
  /** The follow NFT URI is the NFT metadata your followers will mint when they follow you. This can be updated at all times. If you do not pass in anything it will create a super cool changing NFT which will show the last publication of your profile as the NFT which looks awesome! This means people do not have to worry about writing this logic but still have the ability to customise it for their followers */
  followNFTURI?: InputMaybe<Scalars['Url']>;
  profileId: Scalars['ProfileId'];
};

/** The broadcast item */
export type CreateSetProfileImageUriBroadcastItemResult = {
  __typename?: 'CreateSetProfileImageUriBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateSetProfileImageUriEip712TypedData;
};

/** The set profile uri eip 712 typed data */
export type CreateSetProfileImageUriEip712TypedData = {
  __typename?: 'CreateSetProfileImageUriEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateSetProfileImageUriEip712TypedDataTypes;
  /** The values */
  value: CreateSetProfileImageUriEip712TypedDataValue;
};

/** The set profile image uri eip 712 typed data types */
export type CreateSetProfileImageUriEip712TypedDataTypes = {
  __typename?: 'CreateSetProfileImageUriEIP712TypedDataTypes';
  SetProfileImageURIWithSig: Array<Eip712TypedDataField>;
};

/** The set profile uri eip 712 typed data value */
export type CreateSetProfileImageUriEip712TypedDataValue = {
  __typename?: 'CreateSetProfileImageUriEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  imageURI: Scalars['Url'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
};

/** The broadcast item */
export type CreateSetProfileMetadataUriBroadcastItemResult = {
  __typename?: 'CreateSetProfileMetadataURIBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateSetProfileMetadataUrieip712TypedData;
};

/** The set follow nft uri eip 712 typed data */
export type CreateSetProfileMetadataUrieip712TypedData = {
  __typename?: 'CreateSetProfileMetadataURIEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateSetProfileMetadataUrieip712TypedDataTypes;
  /** The values */
  value: CreateSetProfileMetadataUrieip712TypedDataValue;
};

/** The set follow nft uri eip 712 typed data types */
export type CreateSetProfileMetadataUrieip712TypedDataTypes = {
  __typename?: 'CreateSetProfileMetadataURIEIP712TypedDataTypes';
  SetProfileMetadataURIWithSig: Array<Eip712TypedDataField>;
};

/** The set follow nft uri eip 712 typed data value */
export type CreateSetProfileMetadataUrieip712TypedDataValue = {
  __typename?: 'CreateSetProfileMetadataURIEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  metadata: Scalars['Url'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
};

/** The broadcast item */
export type CreateToggleFollowBroadcastItemResult = {
  __typename?: 'CreateToggleFollowBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateToggleFollowEip712TypedData;
};

/** The create toggle follows eip 712 typed data */
export type CreateToggleFollowEip712TypedData = {
  __typename?: 'CreateToggleFollowEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateToggleFollowEip712TypedDataTypes;
  /** The values */
  value: CreateToggleFollowEip712TypedDataValue;
};

/** The create toggle follows eip 712 typed data types */
export type CreateToggleFollowEip712TypedDataTypes = {
  __typename?: 'CreateToggleFollowEIP712TypedDataTypes';
  ToggleFollowWithSig: Array<Eip712TypedDataField>;
};

/** The create toggle follow eip 712 typed data value */
export type CreateToggleFollowEip712TypedDataValue = {
  __typename?: 'CreateToggleFollowEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  enables: Array<Scalars['Boolean']>;
  nonce: Scalars['Nonce'];
  profileIds: Array<Scalars['ProfileId']>;
};

export type CreateToggleFollowRequest = {
  enables: Array<Scalars['Boolean']>;
  profileIds: Array<Scalars['ProfileId']>;
};

/** The broadcast item */
export type CreateUnfollowBroadcastItemResult = {
  __typename?: 'CreateUnfollowBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateBurnEip712TypedData;
};

/** The custom filters types */
export enum CustomFiltersTypes {
  Gardeners = 'GARDENERS'
}

export type DefaultProfileRequest = {
  ethereumAddress: Scalars['EthereumAddress'];
};

export type DegreesOfSeparationReferenceModuleParams = {
  /** Applied to comments */
  commentsRestricted: Scalars['Boolean'];
  /** Degrees of separation */
  degreesOfSeparation: Scalars['Int'];
  /** Applied to mirrors */
  mirrorsRestricted: Scalars['Boolean'];
};

export type DegreesOfSeparationReferenceModuleSettings = {
  __typename?: 'DegreesOfSeparationReferenceModuleSettings';
  /** Applied to comments */
  commentsRestricted: Scalars['Boolean'];
  contractAddress: Scalars['ContractAddress'];
  /** Degrees of separation */
  degreesOfSeparation: Scalars['Int'];
  /** Applied to mirrors */
  mirrorsRestricted: Scalars['Boolean'];
  /** The reference modules enum */
  type: ReferenceModules;
};

/** The dispatcher */
export type Dispatcher = {
  __typename?: 'Dispatcher';
  /** The dispatcher address */
  address: Scalars['EthereumAddress'];
  /** If the dispatcher can use the relay */
  canUseRelay: Scalars['Boolean'];
};

export type DoesFollow = {
  /** The follower address remember wallets follow profiles */
  followerAddress: Scalars['EthereumAddress'];
  /** The profile id */
  profileId: Scalars['ProfileId'];
};

export type DoesFollowRequest = {
  /** The follower infos */
  followInfos: Array<DoesFollow>;
};

/** The does follow response */
export type DoesFollowResponse = {
  __typename?: 'DoesFollowResponse';
  /** The follower address remember wallets follow profiles */
  followerAddress: Scalars['EthereumAddress'];
  /** If the user does follow */
  follows: Scalars['Boolean'];
  /** Is finalised on-chain */
  isFinalisedOnChain: Scalars['Boolean'];
  /** The profile id */
  profileId: Scalars['ProfileId'];
};

/** The eip 712 typed data domain */
export type Eip712TypedDataDomain = {
  __typename?: 'EIP712TypedDataDomain';
  /** The chainId */
  chainId: Scalars['ChainId'];
  /** The name of the typed data domain */
  name: Scalars['String'];
  /** The verifying contract */
  verifyingContract: Scalars['ContractAddress'];
  /** The version */
  version: Scalars['String'];
};

/** The eip 712 typed data field */
export type Eip712TypedDataField = {
  __typename?: 'EIP712TypedDataField';
  /** The name of the typed data field */
  name: Scalars['String'];
  /** The type of the typed data field */
  type: Scalars['String'];
};

export type ElectedMirror = {
  __typename?: 'ElectedMirror';
  mirrorId: Scalars['InternalPublicationId'];
  profile: Profile;
  timestamp: Scalars['DateTime'];
};

export type EnabledModule = {
  __typename?: 'EnabledModule';
  contractAddress: Scalars['ContractAddress'];
  inputParams: Array<ModuleInfo>;
  moduleName: Scalars['String'];
  redeemParams: Array<ModuleInfo>;
  returnDataParms: Array<ModuleInfo>;
};

/** The enabled modules */
export type EnabledModules = {
  __typename?: 'EnabledModules';
  collectModules: Array<EnabledModule>;
  followModules: Array<EnabledModule>;
  referenceModules: Array<EnabledModule>;
};

export type EnsOnChainIdentity = {
  __typename?: 'EnsOnChainIdentity';
  /** The default ens mapped to this address */
  name?: Maybe<Scalars['Ens']>;
};

/** The erc20 type */
export type Erc20 = {
  __typename?: 'Erc20';
  /** The erc20 address */
  address: Scalars['ContractAddress'];
  /** Decimal places for the token */
  decimals: Scalars['Int'];
  /** Name of the symbol */
  name: Scalars['String'];
  /** Symbol for the token */
  symbol: Scalars['String'];
};

export type Erc20Amount = {
  __typename?: 'Erc20Amount';
  /** The erc20 token info */
  asset: Erc20;
  /** Floating point number as string (e.g. 42.009837). It could have the entire precision of the Asset or be truncated to the last significant decimal. */
  value: Scalars['String'];
};

/** The paginated publication result */
export type ExploreProfileResult = {
  __typename?: 'ExploreProfileResult';
  items: Array<Profile>;
  pageInfo: PaginatedResultInfo;
};

export type ExploreProfilesRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  customFilters?: InputMaybe<Array<CustomFiltersTypes>>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  sortCriteria: ProfileSortCriteria;
  timestamp?: InputMaybe<Scalars['TimestampScalar']>;
};

export type ExplorePublicationRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  customFilters?: InputMaybe<Array<CustomFiltersTypes>>;
  /** If you wish to exclude any results for profile ids */
  excludeProfileIds?: InputMaybe<Array<Scalars['ProfileId']>>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  /** If you want the randomizer off (default on) */
  noRandomize?: InputMaybe<Scalars['Boolean']>;
  /** The publication types you want to query */
  publicationTypes?: InputMaybe<Array<PublicationTypes>>;
  sortCriteria: PublicationSortCriteria;
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>;
  timestamp?: InputMaybe<Scalars['TimestampScalar']>;
};

/** The paginated publication result */
export type ExplorePublicationResult = {
  __typename?: 'ExplorePublicationResult';
  items: Array<Publication>;
  pageInfo: PaginatedResultInfo;
};

export type FeeCollectModuleParams = {
  /** The collect module amount info */
  amount: ModuleFeeAmountParams;
  /** Follower only */
  followerOnly: Scalars['Boolean'];
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
};

export type FeeCollectModuleSettings = {
  __typename?: 'FeeCollectModuleSettings';
  /** The collect module amount info */
  amount: ModuleFeeAmount;
  contractAddress: Scalars['ContractAddress'];
  /** Follower only */
  followerOnly: Scalars['Boolean'];
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
  /** The collect modules enum */
  type: CollectModules;
};

export type FeeFollowModuleParams = {
  /** The follow module amount info */
  amount: ModuleFeeAmountParams;
  /** The follow module recipient address */
  recipient: Scalars['EthereumAddress'];
};

export type FeeFollowModuleRedeemParams = {
  /** The expected amount to pay */
  amount: ModuleFeeAmountParams;
};

export type FeeFollowModuleSettings = {
  __typename?: 'FeeFollowModuleSettings';
  /** The collect module amount info */
  amount: ModuleFeeAmount;
  contractAddress: Scalars['ContractAddress'];
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress'];
  /** The follow modules enum */
  type: FollowModules;
};

/** The feed event item filter types */
export enum FeedEventItemType {
  CollectComment = 'COLLECT_COMMENT',
  CollectPost = 'COLLECT_POST',
  Comment = 'COMMENT',
  Mirror = 'MIRROR',
  Post = 'POST',
  ReactionComment = 'REACTION_COMMENT',
  ReactionPost = 'REACTION_POST'
}

export type FeedHighlightsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  /** The profile id */
  profileId: Scalars['ProfileId'];
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>;
};

export type FeedItem = {
  __typename?: 'FeedItem';
  /** Sorted by most recent first. Resolves defaultProfile and if null omits the wallet collect event from the list. */
  collects: Array<CollectedEvent>;
  /** Sorted by most recent first. Up to page size - 1 comments. */
  comments?: Maybe<Array<Comment>>;
  /** The elected mirror will be the first Mirror publication within the page results set */
  electedMirror?: Maybe<ElectedMirror>;
  /** Sorted by most recent first. Up to page size - 1 mirrors */
  mirrors: Array<MirrorEvent>;
  /** Sorted by most recent first. Up to page size - 1 reactions */
  reactions: Array<ReactionEvent>;
  root: FeedItemRoot;
};

export type FeedItemRoot = Comment | Post;

export type FeedRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  /** Filter your feed to whatever you wish */
  feedEventItemTypes?: InputMaybe<Array<FeedEventItemType>>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  /** The profile id */
  profileId: Scalars['ProfileId'];
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>;
};

export type Follow = {
  followModule?: InputMaybe<FollowModuleRedeemParams>;
  profile: Scalars['ProfileId'];
};

export type FollowModule = FeeFollowModuleSettings | ProfileFollowModuleSettings | RevertFollowModuleSettings | UnknownFollowModuleSettings;

export type FollowModuleParams = {
  /** The follower fee follower module */
  feeFollowModule?: InputMaybe<FeeFollowModuleParams>;
  /** The empty follow module */
  freeFollowModule?: InputMaybe<Scalars['Boolean']>;
  /** The profile follow module */
  profileFollowModule?: InputMaybe<Scalars['Boolean']>;
  /** The revert follow module */
  revertFollowModule?: InputMaybe<Scalars['Boolean']>;
  /** A unknown follow module */
  unknownFollowModule?: InputMaybe<UnknownFollowModuleParams>;
};

export type FollowModuleRedeemParams = {
  /** The follower fee follower module */
  feeFollowModule?: InputMaybe<FeeFollowModuleRedeemParams>;
  /** The profile follower module */
  profileFollowModule?: InputMaybe<ProfileFollowModuleRedeemParams>;
  /** A unknown follow module */
  unknownFollowModule?: InputMaybe<UnknownFollowModuleRedeemParams>;
};

/** The follow module types */
export enum FollowModules {
  FeeFollowModule = 'FeeFollowModule',
  ProfileFollowModule = 'ProfileFollowModule',
  RevertFollowModule = 'RevertFollowModule',
  UnknownFollowModule = 'UnknownFollowModule'
}

export type FollowOnlyReferenceModuleSettings = {
  __typename?: 'FollowOnlyReferenceModuleSettings';
  contractAddress: Scalars['ContractAddress'];
  /** The reference modules enum */
  type: ReferenceModules;
};

export type FollowProxyAction = {
  freeFollow?: InputMaybe<FreeFollowProxyAction>;
};

export type FollowRequest = {
  follow: Array<Follow>;
};

export type FollowRevenueResult = {
  __typename?: 'FollowRevenueResult';
  revenues: Array<RevenueAggregate>;
};

export type Follower = {
  __typename?: 'Follower';
  totalAmountOfTimesFollowed: Scalars['Int'];
  wallet: Wallet;
};

export type FollowerNftOwnedTokenIds = {
  __typename?: 'FollowerNftOwnedTokenIds';
  followerNftAddress: Scalars['ContractAddress'];
  tokensIds: Array<Scalars['String']>;
};

export type FollowerNftOwnedTokenIdsRequest = {
  address: Scalars['EthereumAddress'];
  profileId: Scalars['ProfileId'];
};

export type FollowersRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  profileId: Scalars['ProfileId'];
};

export type Following = {
  __typename?: 'Following';
  profile: Profile;
  totalAmountOfTimesFollowing: Scalars['Int'];
};

export type FollowingRequest = {
  address: Scalars['EthereumAddress'];
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
};

export type FraudReasonInputParams = {
  reason: PublicationReportingReason;
  subreason: PublicationReportingFraudSubreason;
};

export type FreeCollectModuleParams = {
  /** Follower only */
  followerOnly: Scalars['Boolean'];
};

export type FreeCollectModuleSettings = {
  __typename?: 'FreeCollectModuleSettings';
  contractAddress: Scalars['ContractAddress'];
  /** Follower only */
  followerOnly: Scalars['Boolean'];
  /** The collect modules enum */
  type: CollectModules;
};

export type FreeCollectProxyAction = {
  publicationId: Scalars['InternalPublicationId'];
};

export type FreeFollowProxyAction = {
  profileId: Scalars['ProfileId'];
};

export type GenerateModuleCurrencyApproval = {
  __typename?: 'GenerateModuleCurrencyApproval';
  data: Scalars['BlockchainData'];
  from: Scalars['EthereumAddress'];
  to: Scalars['ContractAddress'];
};

export type GenerateModuleCurrencyApprovalDataRequest = {
  collectModule?: InputMaybe<CollectModules>;
  currency: Scalars['ContractAddress'];
  followModule?: InputMaybe<FollowModules>;
  referenceModule?: InputMaybe<ReferenceModules>;
  unknownCollectModule?: InputMaybe<Scalars['ContractAddress']>;
  unknownFollowModule?: InputMaybe<Scalars['ContractAddress']>;
  unknownReferenceModule?: InputMaybe<Scalars['ContractAddress']>;
  /** Floating point number as string (e.g. 42.009837). The server will move its decimal places for you */
  value: Scalars['String'];
};

export type GetPublicationMetadataStatusRequest = {
  publicationId?: InputMaybe<Scalars['InternalPublicationId']>;
  txHash?: InputMaybe<Scalars['TxHash']>;
  txId?: InputMaybe<Scalars['TxId']>;
};

export type GlobalProtocolStats = {
  __typename?: 'GlobalProtocolStats';
  totalBurntProfiles: Scalars['Int'];
  totalCollects: Scalars['Int'];
  totalComments: Scalars['Int'];
  totalFollows: Scalars['Int'];
  totalMirrors: Scalars['Int'];
  totalPosts: Scalars['Int'];
  totalProfiles: Scalars['Int'];
  totalRevenue: Array<Erc20Amount>;
};

export type GlobalProtocolStatsRequest = {
  /** Unix time from timestamp - if not supplied it will go from 0 timestamp */
  fromTimestamp?: InputMaybe<Scalars['UnixTimestamp']>;
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>;
  /** Unix time to timestamp - if not supplied it go to the present timestamp */
  toTimestamp?: InputMaybe<Scalars['UnixTimestamp']>;
};

export type HasTxHashBeenIndexedRequest = {
  /** Tx hash.. if your using the broadcaster you should use txId due to gas price upgrades */
  txHash?: InputMaybe<Scalars['TxHash']>;
  /** Tx id.. if your using the broadcaster you should always use this field */
  txId?: InputMaybe<Scalars['TxId']>;
};

export type HidePublicationRequest = {
  /** Publication id */
  publicationId: Scalars['InternalPublicationId'];
};

export type IllegalReasonInputParams = {
  reason: PublicationReportingReason;
  subreason: PublicationReportingIllegalSubreason;
};

export type InternalPublicationsFilterRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  /** must be DD/MM/YYYY */
  fromDate: Scalars['String'];
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** The shared secret */
  secret: Scalars['String'];
  /** The App Id */
  source: Scalars['Sources'];
  /** must be DD/MM/YYYY */
  toDate: Scalars['String'];
};

export type LimitedFeeCollectModuleParams = {
  /** The collect module amount info */
  amount: ModuleFeeAmountParams;
  /** The collect module limit */
  collectLimit: Scalars['String'];
  /** Follower only */
  followerOnly: Scalars['Boolean'];
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
};

export type LimitedFeeCollectModuleSettings = {
  __typename?: 'LimitedFeeCollectModuleSettings';
  /** The collect module amount info */
  amount: ModuleFeeAmount;
  /** The collect module limit */
  collectLimit: Scalars['String'];
  contractAddress: Scalars['ContractAddress'];
  /** Follower only */
  followerOnly: Scalars['Boolean'];
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
  /** The collect modules enum */
  type: CollectModules;
};

export type LimitedTimedFeeCollectModuleParams = {
  /** The collect module amount info */
  amount: ModuleFeeAmountParams;
  /** The collect module limit */
  collectLimit: Scalars['String'];
  /** Follower only */
  followerOnly: Scalars['Boolean'];
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
};

export type LimitedTimedFeeCollectModuleSettings = {
  __typename?: 'LimitedTimedFeeCollectModuleSettings';
  /** The collect module amount info */
  amount: ModuleFeeAmount;
  /** The collect module limit */
  collectLimit: Scalars['String'];
  contractAddress: Scalars['ContractAddress'];
  /** The collect module end timestamp */
  endTimestamp: Scalars['DateTime'];
  /** Follower only */
  followerOnly: Scalars['Boolean'];
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
  /** The collect modules enum */
  type: CollectModules;
};

export type Log = {
  __typename?: 'Log';
  address: Scalars['ContractAddress'];
  blockHash: Scalars['String'];
  blockNumber: Scalars['Int'];
  data: Scalars['String'];
  logIndex: Scalars['Int'];
  removed: Scalars['Boolean'];
  topics: Array<Scalars['String']>;
  transactionHash: Scalars['TxHash'];
  transactionIndex: Scalars['Int'];
};

export type MainPostReference = Mirror | Post;

/** The Media url */
export type Media = {
  __typename?: 'Media';
  /** The alt tags for accessibility */
  altTag?: Maybe<Scalars['String']>;
  /** The cover for any video or audio you attached */
  cover?: Maybe<Scalars['String']>;
  /** Height - will always be null on the public API */
  height?: Maybe<Scalars['Int']>;
  /** The image/audio/video mime type for the publication */
  mimeType?: Maybe<Scalars['MimeType']>;
  /** Size - will always be null on the public API */
  size?: Maybe<Scalars['Int']>;
  /** The token image nft */
  url: Scalars['Url'];
  /** Width - will always be null on the public API */
  width?: Maybe<Scalars['Int']>;
};

/** The Media Set */
export type MediaSet = {
  __typename?: 'MediaSet';
  /**
   * Medium media - will always be null on the public API
   * @deprecated should not be used will always be null
   */
  medium?: Maybe<Media>;
  /** Original media */
  original: Media;
  /**
   * Small media - will always be null on the public API
   * @deprecated should not be used will always be null
   */
  small?: Maybe<Media>;
};

export type MentionPublication = Comment | Post;

/** The metadata attribute input */
export type MetadataAttributeInput = {
  /** The display type */
  displayType?: InputMaybe<PublicationMetadataDisplayTypes>;
  /** The trait type - can be anything its the name it will render so include spaces */
  traitType: Scalars['String'];
  /** The value */
  value: Scalars['String'];
};

/** The metadata attribute output */
export type MetadataAttributeOutput = {
  __typename?: 'MetadataAttributeOutput';
  /** The display type */
  displayType?: Maybe<PublicationMetadataDisplayTypes>;
  /** The trait type - can be anything its the name it will render so include spaces */
  traitType?: Maybe<Scalars['String']>;
  /** The value */
  value?: Maybe<Scalars['String']>;
};

/** The metadata output */
export type MetadataOutput = {
  __typename?: 'MetadataOutput';
  /** The main focus of the publication */
  animatedUrl?: Maybe<Scalars['Url']>;
  /** The attributes */
  attributes: Array<MetadataAttributeOutput>;
  /** This is the metadata content for the publication, should be markdown */
  content?: Maybe<Scalars['Markdown']>;
  /** The content warning for the publication */
  contentWarning?: Maybe<PublicationContentWarning>;
  /** The image cover for video/music publications */
  cover?: Maybe<MediaSet>;
  /** This is the metadata description */
  description?: Maybe<Scalars['Markdown']>;
  /** This is the image attached to the metadata and the property used to show the NFT! */
  image?: Maybe<Scalars['Url']>;
  /** The locale of the publication,  */
  locale?: Maybe<Scalars['Locale']>;
  /** The main focus of the publication */
  mainContentFocus: PublicationMainFocus;
  /** The images/audios/videos for the publication */
  media: Array<MediaSet>;
  /** The metadata name */
  name?: Maybe<Scalars['String']>;
  /** The tags for the publication */
  tags: Array<Scalars['String']>;
};

/** The social mirror */
export type Mirror = {
  __typename?: 'Mirror';
  /** ID of the source */
  appId?: Maybe<Scalars['Sources']>;
  canComment: CanCommentResponse;
  canMirror: CanMirrorResponse;
  /** The collect module */
  collectModule: CollectModule;
  /** The contract address for the collect nft.. if its null it means nobody collected yet as it lazy deployed */
  collectNftAddress?: Maybe<Scalars['ContractAddress']>;
  /** The date the post was created on */
  createdAt: Scalars['DateTime'];
  hasCollectedByMe: Scalars['Boolean'];
  /** If the publication has been hidden if it has then the content and media is not available */
  hidden: Scalars['Boolean'];
  /** The internal publication id */
  id: Scalars['InternalPublicationId'];
  /** The metadata for the post */
  metadata: MetadataOutput;
  /** The mirror publication */
  mirrorOf: MirrorablePublication;
  /** The on chain content uri could be `ipfs://` or `https` */
  onChainContentURI: Scalars['String'];
  /** The profile ref */
  profile: Profile;
  reaction?: Maybe<ReactionTypes>;
  /** The reference module */
  referenceModule?: Maybe<ReferenceModule>;
  /** The publication stats */
  stats: PublicationStats;
};


/** The social mirror */
export type MirrorCanCommentArgs = {
  profileId?: InputMaybe<Scalars['ProfileId']>;
};


/** The social mirror */
export type MirrorCanMirrorArgs = {
  profileId?: InputMaybe<Scalars['ProfileId']>;
};


/** The social mirror */
export type MirrorReactionArgs = {
  request?: InputMaybe<ReactionFieldResolverRequest>;
};

export type MirrorEvent = {
  __typename?: 'MirrorEvent';
  profile: Profile;
  timestamp: Scalars['DateTime'];
};

export type MirrorablePublication = Comment | Post;

export type ModuleFeeAmount = {
  __typename?: 'ModuleFeeAmount';
  /** The erc20 token info */
  asset: Erc20;
  /** Floating point number as string (e.g. 42.009837). It could have the entire precision of the Asset or be truncated to the last significant decimal. */
  value: Scalars['String'];
};

export type ModuleFeeAmountParams = {
  /** The currency address */
  currency: Scalars['ContractAddress'];
  /** Floating point number as string (e.g. 42.009837). It could have the entire precision of the Asset or be truncated to the last significant decimal. */
  value: Scalars['String'];
};

export type ModuleInfo = {
  __typename?: 'ModuleInfo';
  name: Scalars['String'];
  type: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  ach?: Maybe<Scalars['Void']>;
  addReaction?: Maybe<Scalars['Void']>;
  authenticate: AuthenticationResult;
  broadcast: RelayResult;
  claim: RelayResult;
  createBurnProfileTypedData: CreateBurnProfileBroadcastItemResult;
  createCollectTypedData: CreateCollectBroadcastItemResult;
  createCommentTypedData: CreateCommentBroadcastItemResult;
  createCommentViaDispatcher: RelayResult;
  createFollowTypedData: CreateFollowBroadcastItemResult;
  createMirrorTypedData: CreateMirrorBroadcastItemResult;
  createMirrorViaDispatcher: RelayResult;
  createPostTypedData: CreatePostBroadcastItemResult;
  createPostViaDispatcher: RelayResult;
  createSetDefaultProfileTypedData: SetDefaultProfileBroadcastItemResult;
  createSetDispatcherTypedData: CreateSetDispatcherBroadcastItemResult;
  createSetFollowModuleTypedData: CreateSetFollowModuleBroadcastItemResult;
  createSetFollowNFTUriTypedData: CreateSetFollowNftUriBroadcastItemResult;
  createSetProfileImageURITypedData: CreateSetProfileImageUriBroadcastItemResult;
  createSetProfileImageURIViaDispatcher: RelayResult;
  createSetProfileMetadataTypedData: CreateSetProfileMetadataUriBroadcastItemResult;
  createSetProfileMetadataViaDispatcher: RelayResult;
  createToggleFollowTypedData: CreateToggleFollowBroadcastItemResult;
  createUnfollowTypedData: CreateUnfollowBroadcastItemResult;
  hidePublication?: Maybe<Scalars['Void']>;
  proxyAction: Scalars['ProxyActionId'];
  refresh: AuthenticationResult;
  removeReaction?: Maybe<Scalars['Void']>;
  reportPublication?: Maybe<Scalars['Void']>;
};


export type MutationAchArgs = {
  request: AchRequest;
};


export type MutationAddReactionArgs = {
  request: ReactionRequest;
};


export type MutationAuthenticateArgs = {
  request: SignedAuthChallenge;
};


export type MutationBroadcastArgs = {
  request: BroadcastRequest;
};


export type MutationClaimArgs = {
  request: ClaimHandleRequest;
};


export type MutationCreateBurnProfileTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: BurnProfileRequest;
};


export type MutationCreateCollectTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateCollectRequest;
};


export type MutationCreateCommentTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreatePublicCommentRequest;
};


export type MutationCreateCommentViaDispatcherArgs = {
  request: CreatePublicCommentRequest;
};


export type MutationCreateFollowTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: FollowRequest;
};


export type MutationCreateMirrorTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateMirrorRequest;
};


export type MutationCreateMirrorViaDispatcherArgs = {
  request: CreateMirrorRequest;
};


export type MutationCreatePostTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreatePublicPostRequest;
};


export type MutationCreatePostViaDispatcherArgs = {
  request: CreatePublicPostRequest;
};


export type MutationCreateSetDefaultProfileTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateSetDefaultProfileRequest;
};


export type MutationCreateSetDispatcherTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: SetDispatcherRequest;
};


export type MutationCreateSetFollowModuleTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateSetFollowModuleRequest;
};


export type MutationCreateSetFollowNftUriTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateSetFollowNftUriRequest;
};


export type MutationCreateSetProfileImageUriTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: UpdateProfileImageRequest;
};


export type MutationCreateSetProfileImageUriViaDispatcherArgs = {
  request: UpdateProfileImageRequest;
};


export type MutationCreateSetProfileMetadataTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreatePublicSetProfileMetadataUriRequest;
};


export type MutationCreateSetProfileMetadataViaDispatcherArgs = {
  request: CreatePublicSetProfileMetadataUriRequest;
};


export type MutationCreateToggleFollowTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateToggleFollowRequest;
};


export type MutationCreateUnfollowTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: UnfollowRequest;
};


export type MutationHidePublicationArgs = {
  request: HidePublicationRequest;
};


export type MutationProxyActionArgs = {
  request: ProxyActionRequest;
};


export type MutationRefreshArgs = {
  request: RefreshRequest;
};


export type MutationRemoveReactionArgs = {
  request: ReactionRequest;
};


export type MutationReportPublicationArgs = {
  request: ReportPublicationRequest;
};

export type MutualFollowersProfilesQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** The profile id your viewing */
  viewingProfileId: Scalars['ProfileId'];
  /** The profile id you want the result to come back as your viewing from */
  yourProfileId: Scalars['ProfileId'];
};

/** The nft type */
export type Nft = {
  __typename?: 'NFT';
  /** aka "1"  */
  chainId: Scalars['ChainId'];
  /** aka "CryptoKitties"  */
  collectionName: Scalars['String'];
  /** aka "https://api.criptokitt..."  */
  contentURI: Scalars['String'];
  /** aka 0x057Ec652A4F150f7FF94f089A38008f49a0DF88e  */
  contractAddress: Scalars['ContractAddress'];
  /** aka us CryptoKitties */
  contractName: Scalars['String'];
  /** aka "Hey cutie! I m Beard Coffee. ....  */
  description: Scalars['String'];
  /** aka "ERC721"  */
  ercType: Scalars['String'];
  /** aka "Beard Coffee"  */
  name: Scalars['String'];
  /** aka "{ uri:"https://ipfs....", metaType:"image/png" }"  */
  originalContent: NftContent;
  /** aka { address: 0x057Ec652A4F150f7FF94f089A38008f49a0DF88e, amount:"2" }  */
  owners: Array<Owner>;
  /** aka RARI */
  symbol: Scalars['String'];
  /** aka "13"  */
  tokenId: Scalars['String'];
};

/** The NFT content uri */
export type NftContent = {
  __typename?: 'NFTContent';
  /** The animated url */
  animatedUrl?: Maybe<Scalars['String']>;
  /** The meta type content */
  metaType: Scalars['String'];
  /** The token uri  nft */
  uri: Scalars['String'];
};

export type NftData = {
  /** Id of the nft ownership challenge */
  id: Scalars['NftOwnershipId'];
  /** The signature */
  signature: Scalars['Signature'];
};

export type NfTsRequest = {
  /** Chain Ids */
  chainIds: Array<Scalars['ChainId']>;
  /** Filter by contract address */
  contractAddress?: InputMaybe<Scalars['ContractAddress']>;
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** Filter by owner address */
  ownerAddress: Scalars['EthereumAddress'];
};

/** Paginated nft results */
export type NfTsResult = {
  __typename?: 'NFTsResult';
  items: Array<Nft>;
  pageInfo: PaginatedResultInfo;
};

export type NewCollectNotification = {
  __typename?: 'NewCollectNotification';
  collectedPublication: Publication;
  createdAt: Scalars['DateTime'];
  notificationId: Scalars['NotificationId'];
  wallet: Wallet;
};

export type NewCommentNotification = {
  __typename?: 'NewCommentNotification';
  comment: Comment;
  createdAt: Scalars['DateTime'];
  notificationId: Scalars['NotificationId'];
  /** The profile */
  profile: Profile;
};

export type NewFollowerNotification = {
  __typename?: 'NewFollowerNotification';
  createdAt: Scalars['DateTime'];
  isFollowedByMe: Scalars['Boolean'];
  notificationId: Scalars['NotificationId'];
  wallet: Wallet;
};

export type NewMentionNotification = {
  __typename?: 'NewMentionNotification';
  createdAt: Scalars['DateTime'];
  mentionPublication: MentionPublication;
  notificationId: Scalars['NotificationId'];
};

export type NewMirrorNotification = {
  __typename?: 'NewMirrorNotification';
  createdAt: Scalars['DateTime'];
  notificationId: Scalars['NotificationId'];
  /** The profile */
  profile: Profile;
  publication: MirrorablePublication;
};

export type NewReactionNotification = {
  __typename?: 'NewReactionNotification';
  createdAt: Scalars['DateTime'];
  notificationId: Scalars['NotificationId'];
  /** The profile */
  profile: Profile;
  publication: Publication;
  reaction: ReactionTypes;
};

/** The NFT image */
export type NftImage = {
  __typename?: 'NftImage';
  /** The token image nft */
  chainId: Scalars['Int'];
  /** The contract address */
  contractAddress: Scalars['ContractAddress'];
  /** The token id of the nft */
  tokenId: Scalars['String'];
  /** The token image nft */
  uri: Scalars['Url'];
  /** If the NFT is verified */
  verified: Scalars['Boolean'];
};

export type NftOwnershipChallenge = {
  /** Chain Id */
  chainId: Scalars['ChainId'];
  /** ContractAddress for nft */
  contractAddress: Scalars['ContractAddress'];
  /** Token id for NFT */
  tokenId: Scalars['String'];
};

export type NftOwnershipChallengeRequest = {
  /** The wallet address which owns the NFT */
  ethereumAddress: Scalars['EthereumAddress'];
  nfts: Array<NftOwnershipChallenge>;
};

/** NFT ownership challenge result */
export type NftOwnershipChallengeResult = {
  __typename?: 'NftOwnershipChallengeResult';
  /** Id of the nft ownership challenge */
  id: Scalars['NftOwnershipId'];
  text: Scalars['String'];
  /** Timeout of the validation */
  timeout: Scalars['TimestampScalar'];
};

export type Notification = NewCollectNotification | NewCommentNotification | NewFollowerNotification | NewMentionNotification | NewMirrorNotification | NewReactionNotification;

export type NotificationRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  customFilters?: InputMaybe<Array<CustomFiltersTypes>>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  /** The profile id */
  notificationTypes?: InputMaybe<Array<NotificationTypes>>;
  /** The profile id */
  profileId: Scalars['ProfileId'];
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>;
};

/** The notification filter types */
export enum NotificationTypes {
  CollectedComment = 'COLLECTED_COMMENT',
  CollectedPost = 'COLLECTED_POST',
  CommentedComment = 'COMMENTED_COMMENT',
  CommentedPost = 'COMMENTED_POST',
  Followed = 'FOLLOWED',
  MentionComment = 'MENTION_COMMENT',
  MentionPost = 'MENTION_POST',
  MirroredComment = 'MIRRORED_COMMENT',
  MirroredPost = 'MIRRORED_POST',
  ReactionComment = 'REACTION_COMMENT',
  ReactionPost = 'REACTION_POST'
}

export type OnChainIdentity = {
  __typename?: 'OnChainIdentity';
  /** The ens information */
  ens?: Maybe<EnsOnChainIdentity>;
  /** The POH status */
  proofOfHumanity: Scalars['Boolean'];
  /** The sybil dot org information */
  sybilDotOrg: SybilDotOrgIdentity;
  /** The worldcoin identity */
  worldcoin: WorldcoinIdentity;
};

/** The nft type */
export type Owner = {
  __typename?: 'Owner';
  /** aka 0x057Ec652A4F150f7FF94f089A38008f49a0DF88e  */
  address: Scalars['EthereumAddress'];
  /** number of tokens owner */
  amount: Scalars['Float'];
};

/** The paginated wallet result */
export type PaginatedAllPublicationsTagsResult = {
  __typename?: 'PaginatedAllPublicationsTagsResult';
  items: Array<TagResult>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated feed result */
export type PaginatedFeedResult = {
  __typename?: 'PaginatedFeedResult';
  items: Array<FeedItem>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated followers result */
export type PaginatedFollowersResult = {
  __typename?: 'PaginatedFollowersResult';
  items: Array<Follower>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedFollowingResult = {
  __typename?: 'PaginatedFollowingResult';
  items: Array<Following>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated notification result */
export type PaginatedNotificationResult = {
  __typename?: 'PaginatedNotificationResult';
  items: Array<Notification>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated wallet result */
export type PaginatedProfilePublicationsForSaleResult = {
  __typename?: 'PaginatedProfilePublicationsForSaleResult';
  items: Array<PublicationForSale>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated profile result */
export type PaginatedProfileResult = {
  __typename?: 'PaginatedProfileResult';
  items: Array<Profile>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated publication result */
export type PaginatedPublicationResult = {
  __typename?: 'PaginatedPublicationResult';
  items: Array<Publication>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated result info */
export type PaginatedResultInfo = {
  __typename?: 'PaginatedResultInfo';
  /** Cursor to query next results */
  next?: Maybe<Scalars['Cursor']>;
  /** Cursor to query the actual results */
  prev?: Maybe<Scalars['Cursor']>;
  /** The total number of entities the pagination iterates over. If null it means it can not work it out due to dynamic or aggregated query e.g. For a query that requests all nfts with more than 10 likes, this field gives the total amount of nfts with more than 10 likes, not the total amount of nfts */
  totalCount?: Maybe<Scalars['Int']>;
};

/** The paginated timeline result */
export type PaginatedTimelineResult = {
  __typename?: 'PaginatedTimelineResult';
  items: Array<Publication>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated wallet result */
export type PaginatedWhoCollectedResult = {
  __typename?: 'PaginatedWhoCollectedResult';
  items: Array<Wallet>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedWhoReactedResult = {
  __typename?: 'PaginatedWhoReactedResult';
  items: Array<WhoReactedResult>;
  pageInfo: PaginatedResultInfo;
};

export type PendingApprovalFollowsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
};

/** The paginated follow result */
export type PendingApproveFollowsResult = {
  __typename?: 'PendingApproveFollowsResult';
  items: Array<Profile>;
  pageInfo: PaginatedResultInfo;
};

/** The social post */
export type Post = {
  __typename?: 'Post';
  /** ID of the source */
  appId?: Maybe<Scalars['Sources']>;
  canComment: CanCommentResponse;
  canMirror: CanMirrorResponse;
  /** The collect module */
  collectModule: CollectModule;
  /** The contract address for the collect nft.. if its null it means nobody collected yet as it lazy deployed */
  collectNftAddress?: Maybe<Scalars['ContractAddress']>;
  /**
   * Who collected it, this is used for timeline results and like this for better caching for the client
   * @deprecated use `feed` query, timeline query will be killed on the 15th November. This includes this field.
   */
  collectedBy?: Maybe<Wallet>;
  /** The date the post was created on */
  createdAt: Scalars['DateTime'];
  hasCollectedByMe: Scalars['Boolean'];
  /** If the publication has been hidden if it has then the content and media is not available */
  hidden: Scalars['Boolean'];
  /** The internal publication id */
  id: Scalars['InternalPublicationId'];
  /** The metadata for the post */
  metadata: MetadataOutput;
  mirroredByMe: Scalars['Boolean'];
  mirrors: Array<Scalars['InternalPublicationId']>;
  /** The on chain content uri could be `ipfs://` or `https` */
  onChainContentURI: Scalars['String'];
  /** The profile ref */
  profile: Profile;
  reaction?: Maybe<ReactionTypes>;
  /** The reference module */
  referenceModule?: Maybe<ReferenceModule>;
  /** The publication stats */
  stats: PublicationStats;
};


/** The social post */
export type PostCanCommentArgs = {
  profileId?: InputMaybe<Scalars['ProfileId']>;
};


/** The social post */
export type PostCanMirrorArgs = {
  profileId?: InputMaybe<Scalars['ProfileId']>;
};


/** The social post */
export type PostMirrorsArgs = {
  by?: InputMaybe<Scalars['ProfileId']>;
};


/** The social post */
export type PostReactionArgs = {
  request?: InputMaybe<ReactionFieldResolverRequest>;
};

/** The Profile */
export type Profile = {
  __typename?: 'Profile';
  /** Optionals param to add extra attributes on the metadata */
  attributes?: Maybe<Array<Attribute>>;
  /** Bio of the profile */
  bio?: Maybe<Scalars['String']>;
  /** The cover picture for the profile */
  coverPicture?: Maybe<ProfileMedia>;
  /** The dispatcher */
  dispatcher?: Maybe<Dispatcher>;
  /** The follow module */
  followModule?: Maybe<FollowModule>;
  /** Follow nft address */
  followNftAddress?: Maybe<Scalars['ContractAddress']>;
  /** The profile handle */
  handle: Scalars['Handle'];
  /** The profile id */
  id: Scalars['ProfileId'];
  /** Is the profile default */
  isDefault: Scalars['Boolean'];
  isFollowedByMe: Scalars['Boolean'];
  isFollowing: Scalars['Boolean'];
  /** Metadata url */
  metadata?: Maybe<Scalars['Url']>;
  /** Name of the profile */
  name?: Maybe<Scalars['String']>;
  /** The on chain identity */
  onChainIdentity: OnChainIdentity;
  /** Who owns the profile */
  ownedBy: Scalars['EthereumAddress'];
  /** The picture for the profile */
  picture?: Maybe<ProfileMedia>;
  /** Profile stats */
  stats: ProfileStats;
};


/** The Profile */
export type ProfileIsFollowingArgs = {
  who?: InputMaybe<Scalars['ProfileId']>;
};

export type ProfileFollowModuleBeenRedeemedRequest = {
  followProfileId: Scalars['ProfileId'];
  redeemingProfileId: Scalars['ProfileId'];
};

export type ProfileFollowModuleRedeemParams = {
  /** The profile id to use to follow this profile */
  profileId: Scalars['ProfileId'];
};

export type ProfileFollowModuleSettings = {
  __typename?: 'ProfileFollowModuleSettings';
  contractAddress: Scalars['ContractAddress'];
  /** The follow module enum */
  type: FollowModules;
};

export type ProfileFollowRevenueQueryRequest = {
  /** The profile id */
  profileId: Scalars['ProfileId'];
};

export type ProfileMedia = MediaSet | NftImage;

export type ProfileOnChainIdentityRequest = {
  profileIds: Array<Scalars['ProfileId']>;
};

export type ProfilePublicationRevenueQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  /** The profile id */
  profileId: Scalars['ProfileId'];
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>;
  /** The revenue types */
  types?: InputMaybe<Array<PublicationTypes>>;
};

/** The paginated revenue result */
export type ProfilePublicationRevenueResult = {
  __typename?: 'ProfilePublicationRevenueResult';
  items: Array<PublicationRevenue>;
  pageInfo: PaginatedResultInfo;
};

export type ProfilePublicationsForSaleRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  /** Profile id */
  profileId: Scalars['ProfileId'];
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>;
};

export type ProfileQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  /** The handles for the profile */
  handles?: InputMaybe<Array<Scalars['Handle']>>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** The ethereum addresses */
  ownedBy?: InputMaybe<Array<Scalars['EthereumAddress']>>;
  /** The profile ids */
  profileIds?: InputMaybe<Array<Scalars['ProfileId']>>;
  /** The mirrored publication id */
  whoMirroredPublicationId?: InputMaybe<Scalars['InternalPublicationId']>;
};

/** Profile search results */
export type ProfileSearchResult = {
  __typename?: 'ProfileSearchResult';
  items: Array<Profile>;
  pageInfo: PaginatedResultInfo;
  type: SearchRequestTypes;
};

/** profile sort criteria */
export enum ProfileSortCriteria {
  CreatedOn = 'CREATED_ON',
  LatestCreated = 'LATEST_CREATED',
  MostCollects = 'MOST_COLLECTS',
  MostComments = 'MOST_COMMENTS',
  MostFollowers = 'MOST_FOLLOWERS',
  MostMirrors = 'MOST_MIRRORS',
  MostPosts = 'MOST_POSTS',
  MostPublication = 'MOST_PUBLICATION'
}

/** The Profile Stats */
export type ProfileStats = {
  __typename?: 'ProfileStats';
  commentsTotal: Scalars['Int'];
  id: Scalars['ProfileId'];
  mirrorsTotal: Scalars['Int'];
  postsTotal: Scalars['Int'];
  publicationsTotal: Scalars['Int'];
  /** Total collects count */
  totalCollects: Scalars['Int'];
  /** Total comment count */
  totalComments: Scalars['Int'];
  /** Total follower count */
  totalFollowers: Scalars['Int'];
  /** Total following count (remember the wallet follows not profile so will be same for every profile they own) */
  totalFollowing: Scalars['Int'];
  /** Total mirror count */
  totalMirrors: Scalars['Int'];
  /** Total post count */
  totalPosts: Scalars['Int'];
  /** Total publication count */
  totalPublications: Scalars['Int'];
};


/** The Profile Stats */
export type ProfileStatsCommentsTotalArgs = {
  forSources: Array<Scalars['Sources']>;
};


/** The Profile Stats */
export type ProfileStatsMirrorsTotalArgs = {
  forSources: Array<Scalars['Sources']>;
};


/** The Profile Stats */
export type ProfileStatsPostsTotalArgs = {
  forSources: Array<Scalars['Sources']>;
};


/** The Profile Stats */
export type ProfileStatsPublicationsTotalArgs = {
  forSources: Array<Scalars['Sources']>;
};

export type ProxyActionError = {
  __typename?: 'ProxyActionError';
  lastKnownTxId?: Maybe<Scalars['TxId']>;
  reason: Scalars['String'];
};

export type ProxyActionQueued = {
  __typename?: 'ProxyActionQueued';
  queuedAt: Scalars['DateTime'];
};

export type ProxyActionRequest = {
  collect?: InputMaybe<CollectProxyAction>;
  follow?: InputMaybe<FollowProxyAction>;
};

export type ProxyActionStatusResult = {
  __typename?: 'ProxyActionStatusResult';
  status: ProxyActionStatusTypes;
  txHash: Scalars['TxHash'];
  txId: Scalars['TxId'];
};

export type ProxyActionStatusResultUnion = ProxyActionError | ProxyActionQueued | ProxyActionStatusResult;

/** The proxy action status */
export enum ProxyActionStatusTypes {
  Complete = 'COMPLETE',
  Minting = 'MINTING',
  Transferring = 'TRANSFERRING'
}

export type Publication = Comment | Mirror | Post;

/** The publication content warning */
export enum PublicationContentWarning {
  Nsfw = 'NSFW',
  Sensitive = 'SENSITIVE',
  Spoiler = 'SPOILER'
}

export type PublicationForSale = Comment | Post;

/** The publication main focus */
export enum PublicationMainFocus {
  Article = 'ARTICLE',
  Audio = 'AUDIO',
  Embed = 'EMBED',
  Image = 'IMAGE',
  Link = 'LINK',
  TextOnly = 'TEXT_ONLY',
  Video = 'VIDEO'
}

/** Publication metadata content waring filters */
export type PublicationMetadataContentWarningFilter = {
  /** By default all content warnings will be hidden you can include them in your query by adding them to this array. */
  includeOneOf?: InputMaybe<Array<PublicationContentWarning>>;
};

/** The publication metadata display types */
export enum PublicationMetadataDisplayTypes {
  Date = 'date',
  Number = 'number',
  String = 'string'
}

/** Publication metadata filters */
export type PublicationMetadataFilters = {
  contentWarning?: InputMaybe<PublicationMetadataContentWarningFilter>;
  /** IOS 639-1 language code aka en or it and ISO 3166-1 alpha-2 region code aka US or IT aka en-US or it-IT. You can just filter on language if you wish. */
  locale?: InputMaybe<Scalars['Locale']>;
  mainContentFocus?: InputMaybe<Array<PublicationMainFocus>>;
  tags?: InputMaybe<PublicationMetadataTagsFilter>;
};

/** The metadata attribute output */
export type PublicationMetadataMediaInput = {
  /** The alt tags for accessibility */
  altTag?: InputMaybe<Scalars['String']>;
  /** The cover for any video or audio you attached */
  cover?: InputMaybe<Scalars['String']>;
  item: Scalars['Url'];
  /** This is the mime type of media */
  type?: InputMaybe<Scalars['MimeType']>;
};

export type PublicationMetadataStatus = {
  __typename?: 'PublicationMetadataStatus';
  /** If metadata validation failed it will put a reason why here */
  reason?: Maybe<Scalars['String']>;
  status: PublicationMetadataStatusType;
};

/** publication metadata status type */
export enum PublicationMetadataStatusType {
  MetadataValidationFailed = 'METADATA_VALIDATION_FAILED',
  NotFound = 'NOT_FOUND',
  Pending = 'PENDING',
  Success = 'SUCCESS'
}

/** Publication metadata tag filter */
export type PublicationMetadataTagsFilter = {
  /** Needs to only match all */
  all?: InputMaybe<Array<Scalars['String']>>;
  /** Needs to only match one of */
  oneOf?: InputMaybe<Array<Scalars['String']>>;
};

export type PublicationMetadataV1Input = {
  /**
   * A URL to a multi-media attachment for the item. The file extensions GLTF, GLB, WEBM, MP4, M4V, OGV,
   *       and OGG are supported, along with the audio-only extensions MP3, WAV, and OGA.
   *       Animation_url also supports HTML pages, allowing you to build rich experiences and interactive NFTs using JavaScript canvas,
   *       WebGL, and more. Scripts and relative paths within the HTML page are now supported. However, access to browser extensions is not supported.
   */
  animation_url?: InputMaybe<Scalars['Url']>;
  /**  This is the appId the content belongs to */
  appId?: InputMaybe<Scalars['Sources']>;
  /**  These are the attributes for the item, which will show up on the OpenSea and others NFT trading websites on the item. */
  attributes: Array<MetadataAttributeInput>;
  /** The content of a publication. If this is blank `media` must be defined or its out of spec */
  content?: InputMaybe<Scalars['Markdown']>;
  /** A human-readable description of the item. */
  description?: InputMaybe<Scalars['Markdown']>;
  /**
   * This is the URL that will appear below the asset's image on OpenSea and others etc
   *       and will allow users to leave OpenSea and view the item on the site.
   */
  external_url?: InputMaybe<Scalars['Url']>;
  /** legacy to support OpenSea will store any NFT image here. */
  image?: InputMaybe<Scalars['Url']>;
  /** This is the mime type of the image. This is used if your uploading more advanced cover images as sometimes ipfs does not emit the content header so this solves that */
  imageMimeType?: InputMaybe<Scalars['MimeType']>;
  /**  This is lens supported attached media items to the publication */
  media?: InputMaybe<Array<PublicationMetadataMediaInput>>;
  /** The metadata id can be anything but if your uploading to ipfs you will want it to be random.. using uuid could be an option! */
  metadata_id: Scalars['String'];
  /** Name of the item. */
  name: Scalars['String'];
  /** Signed metadata to validate the owner */
  signatureContext?: InputMaybe<PublicationSignatureContextInput>;
  /** The metadata version. (1.0.0 | 2.0.0) */
  version: Scalars['String'];
};

export type PublicationMetadataV2Input = {
  /**
   * A URL to a multi-media attachment for the item. The file extensions GLTF, GLB, WEBM, MP4, M4V, OGV,
   *       and OGG are supported, along with the audio-only extensions MP3, WAV, and OGA.
   *       Animation_url also supports HTML pages, allowing you to build rich experiences and interactive NFTs using JavaScript canvas,
   *       WebGL, and more. Scripts and relative paths within the HTML page are now supported. However, access to browser extensions is not supported.
   */
  animation_url?: InputMaybe<Scalars['Url']>;
  /**  This is the appId the content belongs to */
  appId?: InputMaybe<Scalars['Sources']>;
  /**  These are the attributes for the item, which will show up on the OpenSea and others NFT trading websites on the item. */
  attributes: Array<MetadataAttributeInput>;
  /** The content of a publication. If this is blank `media` must be defined or its out of spec */
  content?: InputMaybe<Scalars['Markdown']>;
  /** Ability to add a content warning */
  contentWarning?: InputMaybe<PublicationContentWarning>;
  /** A human-readable description of the item. */
  description?: InputMaybe<Scalars['Markdown']>;
  /**
   * This is the URL that will appear below the asset's image on OpenSea and others etc
   *       and will allow users to leave OpenSea and view the item on the site.
   */
  external_url?: InputMaybe<Scalars['Url']>;
  /** legacy to support OpenSea will store any NFT image here. */
  image?: InputMaybe<Scalars['Url']>;
  /** This is the mime type of the image. This is used if your uploading more advanced cover images as sometimes ipfs does not emit the content header so this solves that */
  imageMimeType?: InputMaybe<Scalars['MimeType']>;
  /** IOS 639-1 language code aka en or it and ISO 3166-1 alpha-2 region code aka US or IT aka en-US or it-IT */
  locale: Scalars['Locale'];
  /** Main content focus that for this publication */
  mainContentFocus: PublicationMainFocus;
  /**  This is lens supported attached media items to the publication */
  media?: InputMaybe<Array<PublicationMetadataMediaInput>>;
  /** The metadata id can be anything but if your uploading to ipfs you will want it to be random.. using uuid could be an option! */
  metadata_id: Scalars['String'];
  /** Name of the item. */
  name: Scalars['String'];
  /** Signed metadata to validate the owner */
  signatureContext?: InputMaybe<PublicationSignatureContextInput>;
  /** Ability to tag your publication */
  tags?: InputMaybe<Array<Scalars['String']>>;
  /** The metadata version. (1.0.0 | 2.0.0) */
  version: Scalars['String'];
};

export type PublicationQueryRequest = {
  /** The publication id */
  publicationId?: InputMaybe<Scalars['InternalPublicationId']>;
  /** The tx hash */
  txHash?: InputMaybe<Scalars['TxHash']>;
};

/** Publication reporting fraud subreason */
export enum PublicationReportingFraudSubreason {
  Impersonation = 'IMPERSONATION',
  Scam = 'SCAM'
}

/** Publication reporting illegal subreason */
export enum PublicationReportingIllegalSubreason {
  AnimalAbuse = 'ANIMAL_ABUSE',
  DirectThreat = 'DIRECT_THREAT',
  HumanAbuse = 'HUMAN_ABUSE',
  ThreatIndividual = 'THREAT_INDIVIDUAL',
  Violence = 'VIOLENCE'
}

/** Publication reporting reason */
export enum PublicationReportingReason {
  Fraud = 'FRAUD',
  Illegal = 'ILLEGAL',
  Sensitive = 'SENSITIVE',
  Spam = 'SPAM'
}

/** Publication reporting sensitive subreason */
export enum PublicationReportingSensitiveSubreason {
  Nsfw = 'NSFW',
  Offensive = 'OFFENSIVE'
}

/** Publication reporting spam subreason */
export enum PublicationReportingSpamSubreason {
  FakeEngagement = 'FAKE_ENGAGEMENT',
  ManipulationAlgo = 'MANIPULATION_ALGO',
  Misleading = 'MISLEADING',
  MisuseHashtags = 'MISUSE_HASHTAGS',
  Repetitive = 'REPETITIVE',
  SomethingElse = 'SOMETHING_ELSE',
  Unrelated = 'UNRELATED'
}

/** The social comment */
export type PublicationRevenue = {
  __typename?: 'PublicationRevenue';
  publication: Publication;
  revenue: RevenueAggregate;
};

export type PublicationRevenueQueryRequest = {
  /** The publication id */
  publicationId: Scalars['InternalPublicationId'];
};

/** Publication search results */
export type PublicationSearchResult = {
  __typename?: 'PublicationSearchResult';
  items: Array<PublicationSearchResultItem>;
  pageInfo: PaginatedResultInfo;
  type: SearchRequestTypes;
};

export type PublicationSearchResultItem = Comment | Post;

export type PublicationSignatureContextInput = {
  signature: Scalars['String'];
};

/** Publication sort criteria */
export enum PublicationSortCriteria {
  CuratedProfiles = 'CURATED_PROFILES',
  Latest = 'LATEST',
  TopCollected = 'TOP_COLLECTED',
  TopCommented = 'TOP_COMMENTED',
  TopMirrored = 'TOP_MIRRORED'
}

/** The publication stats */
export type PublicationStats = {
  __typename?: 'PublicationStats';
  commentsTotal: Scalars['Int'];
  /** The publication id */
  id: Scalars['InternalPublicationId'];
  /** The total amount of collects */
  totalAmountOfCollects: Scalars['Int'];
  /** The total amount of comments */
  totalAmountOfComments: Scalars['Int'];
  /** The total amount of mirrors */
  totalAmountOfMirrors: Scalars['Int'];
  /** The total amount of upvotes */
  totalDownvotes: Scalars['Int'];
  /** The total amount of downvotes */
  totalUpvotes: Scalars['Int'];
};


/** The publication stats */
export type PublicationStatsCommentsTotalArgs = {
  forSources: Array<Scalars['Sources']>;
};

/** The publication types */
export enum PublicationTypes {
  Comment = 'COMMENT',
  Mirror = 'MIRROR',
  Post = 'POST'
}

export type PublicationValidateMetadataResult = {
  __typename?: 'PublicationValidateMetadataResult';
  /** If `valid` is false it will put a reason why here */
  reason?: Maybe<Scalars['String']>;
  valid: Scalars['Boolean'];
};

export type PublicationsQueryRequest = {
  /** The ethereum address */
  collectedBy?: InputMaybe<Scalars['EthereumAddress']>;
  /** The publication id you wish to get comments for */
  commentsOf?: InputMaybe<Scalars['InternalPublicationId']>;
  cursor?: InputMaybe<Scalars['Cursor']>;
  customFilters?: InputMaybe<Array<CustomFiltersTypes>>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  /** Profile id */
  profileId?: InputMaybe<Scalars['ProfileId']>;
  /** Profile ids */
  profileIds?: InputMaybe<Array<Scalars['ProfileId']>>;
  /** The publication id */
  publicationIds?: InputMaybe<Array<Scalars['InternalPublicationId']>>;
  /** The publication types you want to query */
  publicationTypes?: InputMaybe<Array<PublicationTypes>>;
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>;
};

export type Query = {
  __typename?: 'Query';
  allPublicationsTags: PaginatedAllPublicationsTagsResult;
  approvedModuleAllowanceAmount: Array<ApprovedAllowanceAmount>;
  challenge: AuthChallengeResult;
  claimableHandles: ClaimableHandles;
  claimableStatus: ClaimStatus;
  defaultProfile?: Maybe<Profile>;
  doesFollow: Array<DoesFollowResponse>;
  enabledModuleCurrencies: Array<Erc20>;
  enabledModules: EnabledModules;
  exploreProfiles: ExploreProfileResult;
  explorePublications: ExplorePublicationResult;
  feed: PaginatedFeedResult;
  feedHighlights: PaginatedTimelineResult;
  followerNftOwnedTokenIds?: Maybe<FollowerNftOwnedTokenIds>;
  followers: PaginatedFollowersResult;
  following: PaginatedFollowingResult;
  generateModuleCurrencyApprovalData: GenerateModuleCurrencyApproval;
  globalProtocolStats: GlobalProtocolStats;
  hasTxHashBeenIndexed: TransactionResult;
  internalPublicationFilter: PaginatedPublicationResult;
  mutualFollowersProfiles: PaginatedProfileResult;
  nftOwnershipChallenge: NftOwnershipChallengeResult;
  nfts: NfTsResult;
  notifications: PaginatedNotificationResult;
  pendingApprovalFollows: PendingApproveFollowsResult;
  ping: Scalars['String'];
  profile?: Maybe<Profile>;
  profileFollowModuleBeenRedeemed: Scalars['Boolean'];
  profileFollowRevenue: FollowRevenueResult;
  profileOnChainIdentity: Array<OnChainIdentity>;
  profilePublicationRevenue: ProfilePublicationRevenueResult;
  profilePublicationsForSale: PaginatedProfilePublicationsForSaleResult;
  profiles: PaginatedProfileResult;
  proxyActionStatus: ProxyActionStatusResultUnion;
  publication?: Maybe<Publication>;
  publicationMetadataStatus: PublicationMetadataStatus;
  publicationRevenue?: Maybe<PublicationRevenue>;
  publications: PaginatedPublicationResult;
  recommendedProfiles: Array<Profile>;
  rel?: Maybe<Scalars['Void']>;
  search: SearchResult;
  /** @deprecated You should be using feed, this will not be supported after 15th November 2021, please migrate. */
  timeline: PaginatedTimelineResult;
  txIdToTxHash: Scalars['TxHash'];
  unknownEnabledModules: EnabledModules;
  userSigNonces: UserSigNonces;
  validatePublicationMetadata: PublicationValidateMetadataResult;
  verify: Scalars['Boolean'];
  whoCollectedPublication: PaginatedWhoCollectedResult;
  whoReactedPublication: PaginatedWhoReactedResult;
};


export type QueryAllPublicationsTagsArgs = {
  request: AllPublicationsTagsRequest;
};


export type QueryApprovedModuleAllowanceAmountArgs = {
  request: ApprovedModuleAllowanceAmountRequest;
};


export type QueryChallengeArgs = {
  request: ChallengeRequest;
};


export type QueryDefaultProfileArgs = {
  request: DefaultProfileRequest;
};


export type QueryDoesFollowArgs = {
  request: DoesFollowRequest;
};


export type QueryExploreProfilesArgs = {
  request: ExploreProfilesRequest;
};


export type QueryExplorePublicationsArgs = {
  request: ExplorePublicationRequest;
};


export type QueryFeedArgs = {
  request: FeedRequest;
};


export type QueryFeedHighlightsArgs = {
  request: FeedHighlightsRequest;
};


export type QueryFollowerNftOwnedTokenIdsArgs = {
  request: FollowerNftOwnedTokenIdsRequest;
};


export type QueryFollowersArgs = {
  request: FollowersRequest;
};


export type QueryFollowingArgs = {
  request: FollowingRequest;
};


export type QueryGenerateModuleCurrencyApprovalDataArgs = {
  request: GenerateModuleCurrencyApprovalDataRequest;
};


export type QueryGlobalProtocolStatsArgs = {
  request?: InputMaybe<GlobalProtocolStatsRequest>;
};


export type QueryHasTxHashBeenIndexedArgs = {
  request: HasTxHashBeenIndexedRequest;
};


export type QueryInternalPublicationFilterArgs = {
  request: InternalPublicationsFilterRequest;
};


export type QueryMutualFollowersProfilesArgs = {
  request: MutualFollowersProfilesQueryRequest;
};


export type QueryNftOwnershipChallengeArgs = {
  request: NftOwnershipChallengeRequest;
};


export type QueryNftsArgs = {
  request: NfTsRequest;
};


export type QueryNotificationsArgs = {
  request: NotificationRequest;
};


export type QueryPendingApprovalFollowsArgs = {
  request: PendingApprovalFollowsRequest;
};


export type QueryProfileArgs = {
  request: SingleProfileQueryRequest;
};


export type QueryProfileFollowModuleBeenRedeemedArgs = {
  request: ProfileFollowModuleBeenRedeemedRequest;
};


export type QueryProfileFollowRevenueArgs = {
  request: ProfileFollowRevenueQueryRequest;
};


export type QueryProfileOnChainIdentityArgs = {
  request: ProfileOnChainIdentityRequest;
};


export type QueryProfilePublicationRevenueArgs = {
  request: ProfilePublicationRevenueQueryRequest;
};


export type QueryProfilePublicationsForSaleArgs = {
  request: ProfilePublicationsForSaleRequest;
};


export type QueryProfilesArgs = {
  request: ProfileQueryRequest;
};


export type QueryProxyActionStatusArgs = {
  proxyActionId: Scalars['ProxyActionId'];
};


export type QueryPublicationArgs = {
  request: PublicationQueryRequest;
};


export type QueryPublicationMetadataStatusArgs = {
  request: GetPublicationMetadataStatusRequest;
};


export type QueryPublicationRevenueArgs = {
  request: PublicationRevenueQueryRequest;
};


export type QueryPublicationsArgs = {
  request: PublicationsQueryRequest;
};


export type QueryRecommendedProfilesArgs = {
  options?: InputMaybe<RecommendedProfileOptions>;
};


export type QueryRelArgs = {
  request: RelRequest;
};


export type QuerySearchArgs = {
  request: SearchQueryRequest;
};


export type QueryTimelineArgs = {
  request: TimelineRequest;
};


export type QueryTxIdToTxHashArgs = {
  txId: Scalars['TxId'];
};


export type QueryValidatePublicationMetadataArgs = {
  request: ValidatePublicationMetadataRequest;
};


export type QueryVerifyArgs = {
  request: VerifyRequest;
};


export type QueryWhoCollectedPublicationArgs = {
  request: WhoCollectedPublicationRequest;
};


export type QueryWhoReactedPublicationArgs = {
  request: WhoReactedPublicationRequest;
};

export type ReactionEvent = {
  __typename?: 'ReactionEvent';
  profile: Profile;
  reaction: ReactionTypes;
  timestamp: Scalars['DateTime'];
};

export type ReactionFieldResolverRequest = {
  /** Profile id */
  profileId?: InputMaybe<Scalars['ProfileId']>;
};

export type ReactionRequest = {
  /** Profile id to perform the action */
  profileId: Scalars['ProfileId'];
  /** The internal publication id */
  publicationId: Scalars['InternalPublicationId'];
  /** The reaction */
  reaction: ReactionTypes;
};

/** Reaction types */
export enum ReactionTypes {
  Downvote = 'DOWNVOTE',
  Upvote = 'UPVOTE'
}

export type RecommendedProfileOptions = {
  /** If you wish to turn ML off */
  disableML?: InputMaybe<Scalars['Boolean']>;
  /** If you wish to shuffle the results */
  shuffle?: InputMaybe<Scalars['Boolean']>;
};

export type ReferenceModule = DegreesOfSeparationReferenceModuleSettings | FollowOnlyReferenceModuleSettings | UnknownReferenceModuleSettings;

export type ReferenceModuleParams = {
  /** The degrees of seperation reference module */
  degreesOfSeparationReferenceModule?: InputMaybe<DegreesOfSeparationReferenceModuleParams>;
  /** The follower only reference module */
  followerOnlyReferenceModule?: InputMaybe<Scalars['Boolean']>;
  /** A unknown reference module */
  unknownReferenceModule?: InputMaybe<UnknownReferenceModuleParams>;
};

/** The reference module types */
export enum ReferenceModules {
  DegreesOfSeparationReferenceModule = 'DegreesOfSeparationReferenceModule',
  FollowerOnlyReferenceModule = 'FollowerOnlyReferenceModule',
  UnknownReferenceModule = 'UnknownReferenceModule'
}

/** The refresh request */
export type RefreshRequest = {
  /** The refresh token */
  refreshToken: Scalars['Jwt'];
};

export type RelRequest = {
  ethereumAddress: Scalars['EthereumAddress'];
  secret: Scalars['String'];
};

export type RelayError = {
  __typename?: 'RelayError';
  reason: RelayErrorReasons;
};

/** Relay error reason */
export enum RelayErrorReasons {
  Expired = 'EXPIRED',
  HandleTaken = 'HANDLE_TAKEN',
  NotAllowed = 'NOT_ALLOWED',
  Rejected = 'REJECTED',
  WrongWalletSigned = 'WRONG_WALLET_SIGNED'
}

export type RelayResult = RelayError | RelayerResult;

/** The relayer result */
export type RelayerResult = {
  __typename?: 'RelayerResult';
  /** The tx hash - you should use the `txId` as your identifier as gas prices can be upgraded meaning txHash will change */
  txHash: Scalars['TxHash'];
  /** The tx id */
  txId: Scalars['TxId'];
};

export type ReportPublicationRequest = {
  additionalComments?: InputMaybe<Scalars['String']>;
  publicationId: Scalars['InternalPublicationId'];
  reason: ReportingReasonInputParams;
};

export type ReportingReasonInputParams = {
  fraudReason?: InputMaybe<FraudReasonInputParams>;
  illegalReason?: InputMaybe<IllegalReasonInputParams>;
  sensitiveReason?: InputMaybe<SensitiveReasonInputParams>;
  spamReason?: InputMaybe<SpamReasonInputParams>;
};

export type ReservedClaimableHandle = {
  __typename?: 'ReservedClaimableHandle';
  expiry: Scalars['DateTime'];
  handle: Scalars['Handle'];
  id: Scalars['HandleClaimIdScalar'];
  source: Scalars['String'];
};

export type RevenueAggregate = {
  __typename?: 'RevenueAggregate';
  total: Erc20Amount;
};

export type RevertCollectModuleSettings = {
  __typename?: 'RevertCollectModuleSettings';
  contractAddress: Scalars['ContractAddress'];
  /** The collect modules enum */
  type: CollectModules;
};

export type RevertFollowModuleSettings = {
  __typename?: 'RevertFollowModuleSettings';
  contractAddress: Scalars['ContractAddress'];
  /** The follow module enum */
  type: FollowModules;
};

export type SearchQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  customFilters?: InputMaybe<Array<CustomFiltersTypes>>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** The search term */
  query: Scalars['Search'];
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>;
  type: SearchRequestTypes;
};

/** Search request types */
export enum SearchRequestTypes {
  Profile = 'PROFILE',
  Publication = 'PUBLICATION'
}

export type SearchResult = ProfileSearchResult | PublicationSearchResult;

export type SensitiveReasonInputParams = {
  reason: PublicationReportingReason;
  subreason: PublicationReportingSensitiveSubreason;
};

/** The broadcast item */
export type SetDefaultProfileBroadcastItemResult = {
  __typename?: 'SetDefaultProfileBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: SetDefaultProfileEip712TypedData;
};

/** The default profile eip 712 typed data */
export type SetDefaultProfileEip712TypedData = {
  __typename?: 'SetDefaultProfileEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: SetDefaultProfileEip712TypedDataTypes;
  /** The values */
  value: SetDefaultProfileEip712TypedDataValue;
};

/** The default profile eip 712 typed data types */
export type SetDefaultProfileEip712TypedDataTypes = {
  __typename?: 'SetDefaultProfileEIP712TypedDataTypes';
  SetDefaultProfileWithSig: Array<Eip712TypedDataField>;
};

/** The default profile eip 712 typed data value */
export type SetDefaultProfileEip712TypedDataValue = {
  __typename?: 'SetDefaultProfileEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
  wallet: Scalars['EthereumAddress'];
};

export type SetDispatcherRequest = {
  /** The dispatcher address - they can post, comment, mirror, set follow module, change your profile picture on your behalf, if left as none it will use the built in dispatcher address. */
  dispatcher?: InputMaybe<Scalars['EthereumAddress']>;
  /** If you want to enable or disable it */
  enable?: InputMaybe<Scalars['Boolean']>;
  /** The profile id */
  profileId: Scalars['ProfileId'];
};

/** The signed auth challenge */
export type SignedAuthChallenge = {
  /** The ethereum address you signed the signature with */
  address: Scalars['EthereumAddress'];
  /** The signature */
  signature: Scalars['Signature'];
};

export type SingleProfileQueryRequest = {
  /** The handle for the profile */
  handle?: InputMaybe<Scalars['Handle']>;
  /** The profile id */
  profileId?: InputMaybe<Scalars['ProfileId']>;
};

export type SpamReasonInputParams = {
  reason: PublicationReportingReason;
  subreason: PublicationReportingSpamSubreason;
};

export type SybilDotOrgIdentity = {
  __typename?: 'SybilDotOrgIdentity';
  source: SybilDotOrgIdentitySource;
  /** The sybil dot org status */
  verified: Scalars['Boolean'];
};

export type SybilDotOrgIdentitySource = {
  __typename?: 'SybilDotOrgIdentitySource';
  twitter: SybilDotOrgTwitterIdentity;
};

export type SybilDotOrgTwitterIdentity = {
  __typename?: 'SybilDotOrgTwitterIdentity';
  handle?: Maybe<Scalars['String']>;
};

/** The social comment */
export type TagResult = {
  __typename?: 'TagResult';
  /** The tag */
  tag: Scalars['PublicationTag'];
  /** The total amount of publication tagged */
  total: Scalars['Int'];
};

/** The publications tags sort criteria */
export enum TagSortCriteria {
  Alphabetical = 'ALPHABETICAL',
  MostPopular = 'MOST_POPULAR'
}

export type TimedFeeCollectModuleParams = {
  /** The collect module amount info */
  amount: ModuleFeeAmountParams;
  /** Follower only */
  followerOnly: Scalars['Boolean'];
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
};

export type TimedFeeCollectModuleSettings = {
  __typename?: 'TimedFeeCollectModuleSettings';
  /** The collect module amount info */
  amount: ModuleFeeAmount;
  contractAddress: Scalars['ContractAddress'];
  /** The collect module end timestamp */
  endTimestamp: Scalars['DateTime'];
  /** Follower only */
  followerOnly: Scalars['Boolean'];
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
  /** The collect modules enum */
  type: CollectModules;
};

export type TimelineRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  /** The profile id */
  profileId: Scalars['ProfileId'];
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>;
  /** The timeline types you wish to include, if nothing passed in will bring back all */
  timelineTypes?: InputMaybe<Array<TimelineType>>;
};

/** Timeline types */
export enum TimelineType {
  CollectComment = 'COLLECT_COMMENT',
  CollectPost = 'COLLECT_POST',
  Comment = 'COMMENT',
  Mirror = 'MIRROR',
  Post = 'POST'
}

export type TransactionError = {
  __typename?: 'TransactionError';
  reason: TransactionErrorReasons;
  txReceipt?: Maybe<TransactionReceipt>;
};

/** Transaction error reason */
export enum TransactionErrorReasons {
  Reverted = 'REVERTED'
}

export type TransactionIndexedResult = {
  __typename?: 'TransactionIndexedResult';
  indexed: Scalars['Boolean'];
  /** Publications can be indexed but the ipfs link for example not findable for x time. This allows you to work that out for publications. If its not a publication tx then it always be null. */
  metadataStatus?: Maybe<PublicationMetadataStatus>;
  txHash: Scalars['TxHash'];
  txReceipt?: Maybe<TransactionReceipt>;
};

export type TransactionReceipt = {
  __typename?: 'TransactionReceipt';
  blockHash: Scalars['String'];
  blockNumber: Scalars['Int'];
  byzantium: Scalars['Boolean'];
  confirmations: Scalars['Int'];
  contractAddress?: Maybe<Scalars['ContractAddress']>;
  cumulativeGasUsed: Scalars['String'];
  effectiveGasPrice: Scalars['String'];
  from: Scalars['EthereumAddress'];
  gasUsed: Scalars['String'];
  logs: Array<Log>;
  logsBloom: Scalars['String'];
  root?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  to?: Maybe<Scalars['EthereumAddress']>;
  transactionHash: Scalars['TxHash'];
  transactionIndex: Scalars['Int'];
  type: Scalars['Int'];
};

export type TransactionResult = TransactionError | TransactionIndexedResult;

export type TypedDataOptions = {
  /** If you wish to override the nonce for the sig if you want to do some clever stuff in the client */
  overrideSigNonce: Scalars['Nonce'];
};

export type UnfollowRequest = {
  profile: Scalars['ProfileId'];
};

export type UnknownCollectModuleParams = {
  contractAddress: Scalars['ContractAddress'];
  /** The encoded data to submit with the module */
  data: Scalars['BlockchainData'];
};

export type UnknownCollectModuleSettings = {
  __typename?: 'UnknownCollectModuleSettings';
  /** The data used to setup the module which you can decode with your known ABI  */
  collectModuleReturnData: Scalars['CollectModuleData'];
  contractAddress: Scalars['ContractAddress'];
  /** The collect modules enum */
  type: CollectModules;
};

export type UnknownFollowModuleParams = {
  contractAddress: Scalars['ContractAddress'];
  /** The encoded data to submit with the module */
  data: Scalars['BlockchainData'];
};

export type UnknownFollowModuleRedeemParams = {
  /** The encoded data to submit with the module */
  data: Scalars['BlockchainData'];
};

export type UnknownFollowModuleSettings = {
  __typename?: 'UnknownFollowModuleSettings';
  contractAddress: Scalars['ContractAddress'];
  /** The data used to setup the module which you can decode with your known ABI  */
  followModuleReturnData: Scalars['FollowModuleData'];
  /** The follow modules enum */
  type: FollowModules;
};

export type UnknownReferenceModuleParams = {
  contractAddress: Scalars['ContractAddress'];
  /** The encoded data to submit with the module */
  data: Scalars['BlockchainData'];
};

export type UnknownReferenceModuleSettings = {
  __typename?: 'UnknownReferenceModuleSettings';
  contractAddress: Scalars['ContractAddress'];
  /** The data used to setup the module which you can decode with your known ABI  */
  referenceModuleReturnData: Scalars['ReferenceModuleData'];
  /** The reference modules enum */
  type: ReferenceModules;
};

export type UpdateProfileImageRequest = {
  /** The nft data */
  nftData?: InputMaybe<NftData>;
  profileId: Scalars['ProfileId'];
  /** The url to the image if offline */
  url?: InputMaybe<Scalars['Url']>;
};

export type UserSigNonces = {
  __typename?: 'UserSigNonces';
  lensHubOnChainSigNonce: Scalars['Nonce'];
  peripheryOnChainSigNonce: Scalars['Nonce'];
};

export type ValidatePublicationMetadataRequest = {
  metadatav1?: InputMaybe<PublicationMetadataV1Input>;
  metadatav2?: InputMaybe<PublicationMetadataV2Input>;
};

/** The access request */
export type VerifyRequest = {
  /** The access token */
  accessToken: Scalars['Jwt'];
};

export type Wallet = {
  __typename?: 'Wallet';
  address: Scalars['EthereumAddress'];
  /** The default profile for the wallet for now it is just their first profile, this will be the default profile they picked soon enough */
  defaultProfile?: Maybe<Profile>;
};

export type WhoCollectedPublicationRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** Internal publication id */
  publicationId: Scalars['InternalPublicationId'];
};

export type WhoReactedPublicationRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** Internal publication id */
  publicationId: Scalars['InternalPublicationId'];
};

/** The Profile */
export type WhoReactedResult = {
  __typename?: 'WhoReactedResult';
  profile: Profile;
  /** The reaction */
  reaction: ReactionTypes;
  /** The reaction */
  reactionAt: Scalars['DateTime'];
  /** The reaction id */
  reactionId: Scalars['ReactionId'];
};

export type WorldcoinIdentity = {
  __typename?: 'WorldcoinIdentity';
  /** If the profile has verified as a user */
  isHuman: Scalars['Boolean'];
};

export type PostFieldsFragment = { __typename?: 'Post', mirroredByMe: boolean, id: any, reaction?: ReactionTypes | null, collectNftAddress?: any | null, onChainContentURI: string, hidden: boolean, hasCollectedByMe: boolean, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isDefault: boolean, isFollowedByMe: boolean, dispatcher?: { __typename?: 'Dispatcher', canUseRelay: boolean } | null, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number }, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, collectedBy?: { __typename?: 'Wallet', address: any, defaultProfile?: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null, dispatcher?: { __typename?: 'Dispatcher', canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number } } | null } | null, referenceModule?: { __typename: 'DegreesOfSeparationReferenceModuleSettings' } | { __typename: 'FollowOnlyReferenceModuleSettings' } | { __typename: 'UnknownReferenceModuleSettings' } | null, canComment: { __typename?: 'CanCommentResponse', result: boolean }, canMirror: { __typename?: 'CanMirrorResponse', result: boolean }, collectModule: { __typename?: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, contractAddress: any, followerOnly: boolean, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', symbol: string, decimals: number, address: any } } } | { __typename?: 'FreeCollectModuleSettings', type: CollectModules, contractAddress: any, followerOnly: boolean } | { __typename?: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, contractAddress: any, followerOnly: boolean, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', symbol: string, decimals: number, address: any } } } | { __typename?: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, endTimestamp: any, referralFee: number, contractAddress: any, followerOnly: boolean, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', symbol: string, decimals: number, address: any } } } | { __typename?: 'RevertCollectModuleSettings' } | { __typename?: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, endTimestamp: any, referralFee: number, contractAddress: any, followerOnly: boolean, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', symbol: string, decimals: number, address: any } } } | { __typename?: 'UnknownCollectModuleSettings' }, stats: { __typename?: 'PublicationStats', totalAmountOfComments: number, totalAmountOfCollects: number, totalAmountOfMirrors: number, totalUpvotes: number, totalDownvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, contentWarning?: PublicationContentWarning | null, mainContentFocus: PublicationMainFocus, tags: Array<string>, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, cover?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | null, attributes: Array<{ __typename?: 'MetadataAttributeOutput', value?: string | null, traitType?: string | null }> } };

export type ProfileFieldsFragment = { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isDefault: boolean, isFollowedByMe: boolean, dispatcher?: { __typename?: 'Dispatcher', canUseRelay: boolean } | null, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number }, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null };

type CollectModuleFields_FeeCollectModuleSettings_Fragment = { __typename?: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, contractAddress: any, followerOnly: boolean, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', symbol: string, decimals: number, address: any } } };

type CollectModuleFields_FreeCollectModuleSettings_Fragment = { __typename?: 'FreeCollectModuleSettings', type: CollectModules, contractAddress: any, followerOnly: boolean };

type CollectModuleFields_LimitedFeeCollectModuleSettings_Fragment = { __typename?: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, contractAddress: any, followerOnly: boolean, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', symbol: string, decimals: number, address: any } } };

type CollectModuleFields_LimitedTimedFeeCollectModuleSettings_Fragment = { __typename?: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, endTimestamp: any, referralFee: number, contractAddress: any, followerOnly: boolean, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', symbol: string, decimals: number, address: any } } };

type CollectModuleFields_RevertCollectModuleSettings_Fragment = { __typename?: 'RevertCollectModuleSettings' };

type CollectModuleFields_TimedFeeCollectModuleSettings_Fragment = { __typename?: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, endTimestamp: any, referralFee: number, contractAddress: any, followerOnly: boolean, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', symbol: string, decimals: number, address: any } } };

type CollectModuleFields_UnknownCollectModuleSettings_Fragment = { __typename?: 'UnknownCollectModuleSettings' };

export type CollectModuleFieldsFragment = CollectModuleFields_FeeCollectModuleSettings_Fragment | CollectModuleFields_FreeCollectModuleSettings_Fragment | CollectModuleFields_LimitedFeeCollectModuleSettings_Fragment | CollectModuleFields_LimitedTimedFeeCollectModuleSettings_Fragment | CollectModuleFields_RevertCollectModuleSettings_Fragment | CollectModuleFields_TimedFeeCollectModuleSettings_Fragment | CollectModuleFields_UnknownCollectModuleSettings_Fragment;

export type MirrorFieldsFragment = { __typename?: 'Mirror', id: any, reaction?: ReactionTypes | null, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', name?: string | null, handle: any }, collectModule: { __typename?: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, contractAddress: any, followerOnly: boolean, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', symbol: string, decimals: number, address: any } } } | { __typename?: 'FreeCollectModuleSettings', type: CollectModules, contractAddress: any, followerOnly: boolean } | { __typename?: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, contractAddress: any, followerOnly: boolean, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', symbol: string, decimals: number, address: any } } } | { __typename?: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, endTimestamp: any, referralFee: number, contractAddress: any, followerOnly: boolean, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', symbol: string, decimals: number, address: any } } } | { __typename?: 'RevertCollectModuleSettings' } | { __typename?: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, endTimestamp: any, referralFee: number, contractAddress: any, followerOnly: boolean, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', symbol: string, decimals: number, address: any } } } | { __typename?: 'UnknownCollectModuleSettings' }, stats: { __typename?: 'PublicationStats', totalUpvotes: number, totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, contentWarning?: PublicationContentWarning | null, tags: Array<string>, cover?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', value?: string | null, traitType?: string | null }> }, mirrorOf: { __typename?: 'Comment', id: any, reaction?: ReactionTypes | null, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isDefault: boolean, isFollowedByMe: boolean, dispatcher?: { __typename?: 'Dispatcher', canUseRelay: boolean } | null, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number }, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalUpvotes: number, totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number } } | { __typename?: 'Post', id: any, reaction?: ReactionTypes | null, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isDefault: boolean, isFollowedByMe: boolean, dispatcher?: { __typename?: 'Dispatcher', canUseRelay: boolean } | null, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number }, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, contentWarning?: PublicationContentWarning | null, tags: Array<string>, cover?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', value?: string | null, traitType?: string | null }> }, stats: { __typename?: 'PublicationStats', totalUpvotes: number, totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number } } };

export type MetadataFieldsFragment = { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, contentWarning?: PublicationContentWarning | null, tags: Array<string>, cover?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', value?: string | null, traitType?: string | null }> };

export type CommentFieldsFragment = { __typename?: 'Comment', id: any, reaction?: ReactionTypes | null, hidden: boolean, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isDefault: boolean, isFollowedByMe: boolean, dispatcher?: { __typename?: 'Dispatcher', canUseRelay: boolean } | null, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number }, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, collectedBy?: { __typename?: 'Wallet', address: any, defaultProfile?: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null, dispatcher?: { __typename?: 'Dispatcher', canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number } } | null } | null, collectModule: { __typename?: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, contractAddress: any, followerOnly: boolean, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', symbol: string, decimals: number, address: any } } } | { __typename?: 'FreeCollectModuleSettings', type: CollectModules, contractAddress: any, followerOnly: boolean } | { __typename?: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, contractAddress: any, followerOnly: boolean, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', symbol: string, decimals: number, address: any } } } | { __typename?: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, endTimestamp: any, referralFee: number, contractAddress: any, followerOnly: boolean, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', symbol: string, decimals: number, address: any } } } | { __typename?: 'RevertCollectModuleSettings' } | { __typename?: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, endTimestamp: any, referralFee: number, contractAddress: any, followerOnly: boolean, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', symbol: string, decimals: number, address: any } } } | { __typename?: 'UnknownCollectModuleSettings' }, stats: { __typename?: 'PublicationStats', totalDownvotes: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', traitType?: string | null, value?: string | null }> }, commentOn?: { __typename?: 'Comment' } | { __typename?: 'Mirror' } | { __typename?: 'Post', id: any, createdAt: any, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isDefault: boolean, isFollowedByMe: boolean, dispatcher?: { __typename?: 'Dispatcher', canUseRelay: boolean } | null, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number }, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, metadata: { __typename?: 'MetadataOutput', name?: string | null, cover?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | null, attributes: Array<{ __typename?: 'MetadataAttributeOutput', value?: string | null, traitType?: string | null }> } } | null };

export type MinimalProfileFieldsFragment = { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null, dispatcher?: { __typename?: 'Dispatcher', canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number } };

type RelayerResult_RelayError_Fragment = { __typename?: 'RelayError', reason: RelayErrorReasons };

type RelayerResult_RelayerResult_Fragment = { __typename?: 'RelayerResult', txId: any, txHash: any };

export type RelayerResultFragment = RelayerResult_RelayError_Fragment | RelayerResult_RelayerResult_Fragment;

export type AddReactionMutationVariables = Exact<{
  request: ReactionRequest;
}>;


export type AddReactionMutation = { __typename?: 'Mutation', addReaction?: any | null };

export type ApprovedModuleAllowanceAmountQueryVariables = Exact<{
  request: ApprovedModuleAllowanceAmountRequest;
}>;


export type ApprovedModuleAllowanceAmountQuery = { __typename?: 'Query', approvedModuleAllowanceAmount: Array<{ __typename?: 'ApprovedAllowanceAmount', currency: any, module: string, allowance: string, contractAddress: any }>, enabledModuleCurrencies: Array<{ __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any }> };

export type AuthenticateMutationVariables = Exact<{
  request: SignedAuthChallenge;
}>;


export type AuthenticateMutation = { __typename?: 'Mutation', authenticate: { __typename?: 'AuthenticationResult', accessToken: any, refreshToken: any } };

export type BroadcastMutationVariables = Exact<{
  request: BroadcastRequest;
}>;


export type BroadcastMutation = { __typename?: 'Mutation', broadcast: { __typename?: 'RelayError', reason: RelayErrorReasons } | { __typename?: 'RelayerResult', txId: any, txHash: any } };

export type ChallengeQueryVariables = Exact<{
  request: ChallengeRequest;
}>;


export type ChallengeQuery = { __typename?: 'Query', challenge: { __typename?: 'AuthChallengeResult', text: string } };

export type CollectorsQueryVariables = Exact<{
  request: WhoCollectedPublicationRequest;
}>;


export type CollectorsQuery = { __typename?: 'Query', whoCollectedPublication: { __typename?: 'PaginatedWhoCollectedResult', items: Array<{ __typename?: 'Wallet', address: any, defaultProfile?: { __typename?: 'Profile', isFollowedByMe: boolean, id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isDefault: boolean, dispatcher?: { __typename?: 'Dispatcher', canUseRelay: boolean } | null, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number }, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null } | null }>, pageInfo: { __typename?: 'PaginatedResultInfo', next?: any | null, totalCount?: number | null } } };

export type CommentsFeedQueryVariables = Exact<{
  request: PublicationsQueryRequest;
  reactionRequest?: InputMaybe<ReactionFieldResolverRequest>;
}>;


export type CommentsFeedQuery = { __typename?: 'Query', publications: { __typename?: 'PaginatedPublicationResult', items: Array<{ __typename?: 'Comment', id: any, reaction?: ReactionTypes | null, hidden: boolean, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isDefault: boolean, isFollowedByMe: boolean, dispatcher?: { __typename?: 'Dispatcher', canUseRelay: boolean } | null, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number }, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, collectedBy?: { __typename?: 'Wallet', address: any, defaultProfile?: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null, dispatcher?: { __typename?: 'Dispatcher', canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number } } | null } | null, collectModule: { __typename?: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, contractAddress: any, followerOnly: boolean, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', symbol: string, decimals: number, address: any } } } | { __typename?: 'FreeCollectModuleSettings', type: CollectModules, contractAddress: any, followerOnly: boolean } | { __typename?: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, contractAddress: any, followerOnly: boolean, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', symbol: string, decimals: number, address: any } } } | { __typename?: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, endTimestamp: any, referralFee: number, contractAddress: any, followerOnly: boolean, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', symbol: string, decimals: number, address: any } } } | { __typename?: 'RevertCollectModuleSettings' } | { __typename?: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, endTimestamp: any, referralFee: number, contractAddress: any, followerOnly: boolean, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', symbol: string, decimals: number, address: any } } } | { __typename?: 'UnknownCollectModuleSettings' }, stats: { __typename?: 'PublicationStats', totalDownvotes: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', traitType?: string | null, value?: string | null }> }, commentOn?: { __typename?: 'Comment' } | { __typename?: 'Mirror' } | { __typename?: 'Post', id: any, createdAt: any, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isDefault: boolean, isFollowedByMe: boolean, dispatcher?: { __typename?: 'Dispatcher', canUseRelay: boolean } | null, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number }, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, metadata: { __typename?: 'MetadataOutput', name?: string | null, cover?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | null, attributes: Array<{ __typename?: 'MetadataAttributeOutput', value?: string | null, traitType?: string | null }> } } | null } | { __typename?: 'Mirror' } | { __typename?: 'Post' }>, pageInfo: { __typename?: 'PaginatedResultInfo', totalCount?: number | null, next?: any | null } } };

export type CreateCollectTypedDataMutationVariables = Exact<{
  options?: InputMaybe<TypedDataOptions>;
  request: CreateCollectRequest;
}>;


export type CreateCollectTypedDataMutation = { __typename?: 'Mutation', createCollectTypedData: { __typename?: 'CreateCollectBroadcastItemResult', id: any, expiresAt: any, typedData: { __typename?: 'CreateCollectEIP712TypedData', types: { __typename?: 'CreateCollectEIP712TypedDataTypes', CollectWithSig: Array<{ __typename?: 'EIP712TypedDataField', name: string, type: string }> }, domain: { __typename?: 'EIP712TypedDataDomain', name: string, chainId: any, version: string, verifyingContract: any }, value: { __typename?: 'CreateCollectEIP712TypedDataValue', nonce: any, deadline: any, profileId: any, pubId: any, data: any } } } };

export type CreateCommentTypedDataMutationVariables = Exact<{
  options?: InputMaybe<TypedDataOptions>;
  request: CreatePublicCommentRequest;
}>;


export type CreateCommentTypedDataMutation = { __typename?: 'Mutation', createCommentTypedData: { __typename?: 'CreateCommentBroadcastItemResult', id: any, expiresAt: any, typedData: { __typename?: 'CreateCommentEIP712TypedData', types: { __typename?: 'CreateCommentEIP712TypedDataTypes', CommentWithSig: Array<{ __typename?: 'EIP712TypedDataField', name: string, type: string }> }, domain: { __typename?: 'EIP712TypedDataDomain', name: string, chainId: any, version: string, verifyingContract: any }, value: { __typename?: 'CreateCommentEIP712TypedDataValue', nonce: any, deadline: any, profileId: any, profileIdPointed: any, pubIdPointed: any, contentURI: any, collectModule: any, collectModuleInitData: any, referenceModule: any, referenceModuleData: any, referenceModuleInitData: any } } } };

export type CreateCommentViaDispatcherMutationVariables = Exact<{
  request: CreatePublicCommentRequest;
}>;


export type CreateCommentViaDispatcherMutation = { __typename?: 'Mutation', createCommentViaDispatcher: { __typename?: 'RelayError', reason: RelayErrorReasons } | { __typename?: 'RelayerResult', txId: any, txHash: any } };

export type CreateFollowTypedDataMutationVariables = Exact<{
  options?: InputMaybe<TypedDataOptions>;
  request: FollowRequest;
}>;


export type CreateFollowTypedDataMutation = { __typename?: 'Mutation', createFollowTypedData: { __typename?: 'CreateFollowBroadcastItemResult', id: any, expiresAt: any, typedData: { __typename?: 'CreateFollowEIP712TypedData', domain: { __typename?: 'EIP712TypedDataDomain', name: string, chainId: any, version: string, verifyingContract: any }, types: { __typename?: 'CreateFollowEIP712TypedDataTypes', FollowWithSig: Array<{ __typename?: 'EIP712TypedDataField', name: string, type: string }> }, value: { __typename?: 'CreateFollowEIP712TypedDataValue', nonce: any, deadline: any, profileIds: Array<any>, datas: Array<any> } } } };

export type CreateMirrorTypedDataMutationVariables = Exact<{
  options?: InputMaybe<TypedDataOptions>;
  request: CreateMirrorRequest;
}>;


export type CreateMirrorTypedDataMutation = { __typename?: 'Mutation', createMirrorTypedData: { __typename?: 'CreateMirrorBroadcastItemResult', id: any, expiresAt: any, typedData: { __typename?: 'CreateMirrorEIP712TypedData', types: { __typename?: 'CreateMirrorEIP712TypedDataTypes', MirrorWithSig: Array<{ __typename?: 'EIP712TypedDataField', name: string, type: string }> }, domain: { __typename?: 'EIP712TypedDataDomain', name: string, chainId: any, version: string, verifyingContract: any }, value: { __typename?: 'CreateMirrorEIP712TypedDataValue', nonce: any, deadline: any, profileId: any, profileIdPointed: any, pubIdPointed: any, referenceModule: any, referenceModuleData: any, referenceModuleInitData: any } } } };

export type CreateMirrorViaDispatcherMutationVariables = Exact<{
  request: CreateMirrorRequest;
}>;


export type CreateMirrorViaDispatcherMutation = { __typename?: 'Mutation', createMirrorViaDispatcher: { __typename?: 'RelayError', reason: RelayErrorReasons } | { __typename?: 'RelayerResult', txId: any, txHash: any } };

export type CurrentUserQueryVariables = Exact<{
  ownedBy?: InputMaybe<Array<Scalars['EthereumAddress']> | Scalars['EthereumAddress']>;
}>;


export type CurrentUserQuery = { __typename?: 'Query', profiles: { __typename?: 'PaginatedProfileResult', items: Array<{ __typename?: 'Profile', isDefault: boolean, id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null, dispatcher?: { __typename?: 'Dispatcher', canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number } }> }, userSigNonces: { __typename?: 'UserSigNonces', lensHubOnChainSigNonce: any } };

export type EnabledCurrencyModulesQueryVariables = Exact<{
  request: ProfileQueryRequest;
}>;


export type EnabledCurrencyModulesQuery = { __typename?: 'Query', enabledModuleCurrencies: Array<{ __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any }>, profiles: { __typename?: 'PaginatedProfileResult', items: Array<{ __typename?: 'Profile', followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }> } };

export type GenerateModuleCurrencyApprovalDataQueryVariables = Exact<{
  request: GenerateModuleCurrencyApprovalDataRequest;
}>;


export type GenerateModuleCurrencyApprovalDataQuery = { __typename?: 'Query', generateModuleCurrencyApprovalData: { __typename?: 'GenerateModuleCurrencyApproval', to: any, from: any, data: any } };

export type HasPublicationIndexedQueryVariables = Exact<{
  request: PublicationQueryRequest;
}>;


export type HasPublicationIndexedQuery = { __typename?: 'Query', publication?: { __typename?: 'Comment' } | { __typename?: 'Mirror' } | { __typename?: 'Post', id: any } | null };

export type HasTxHashBeenIndexedQueryVariables = Exact<{
  request: HasTxHashBeenIndexedRequest;
}>;


export type HasTxHashBeenIndexedQuery = { __typename?: 'Query', hasTxHashBeenIndexed: { __typename?: 'TransactionError', reason: TransactionErrorReasons } | { __typename?: 'TransactionIndexedResult', indexed: boolean, txReceipt?: { __typename?: 'TransactionReceipt', transactionHash: any } | null } };

export type ProfileFeedQueryVariables = Exact<{
  request: PublicationsQueryRequest;
  reactionRequest?: InputMaybe<ReactionFieldResolverRequest>;
  channelId?: InputMaybe<Scalars['ProfileId']>;
}>;


export type ProfileFeedQuery = { __typename?: 'Query', publications: { __typename?: 'PaginatedPublicationResult', items: Array<{ __typename?: 'Comment', id: any, reaction?: ReactionTypes | null, hidden: boolean, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isDefault: boolean, isFollowedByMe: boolean, dispatcher?: { __typename?: 'Dispatcher', canUseRelay: boolean } | null, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number }, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, collectedBy?: { __typename?: 'Wallet', address: any, defaultProfile?: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null, dispatcher?: { __typename?: 'Dispatcher', canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number } } | null } | null, collectModule: { __typename?: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, contractAddress: any, followerOnly: boolean, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', symbol: string, decimals: number, address: any } } } | { __typename?: 'FreeCollectModuleSettings', type: CollectModules, contractAddress: any, followerOnly: boolean } | { __typename?: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, contractAddress: any, followerOnly: boolean, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', symbol: string, decimals: number, address: any } } } | { __typename?: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, endTimestamp: any, referralFee: number, contractAddress: any, followerOnly: boolean, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', symbol: string, decimals: number, address: any } } } | { __typename?: 'RevertCollectModuleSettings' } | { __typename?: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, endTimestamp: any, referralFee: number, contractAddress: any, followerOnly: boolean, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', symbol: string, decimals: number, address: any } } } | { __typename?: 'UnknownCollectModuleSettings' }, stats: { __typename?: 'PublicationStats', totalDownvotes: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', traitType?: string | null, value?: string | null }> }, commentOn?: { __typename?: 'Comment' } | { __typename?: 'Mirror' } | { __typename?: 'Post', id: any, createdAt: any, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isDefault: boolean, isFollowedByMe: boolean, dispatcher?: { __typename?: 'Dispatcher', canUseRelay: boolean } | null, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number }, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, metadata: { __typename?: 'MetadataOutput', name?: string | null, cover?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | null, attributes: Array<{ __typename?: 'MetadataAttributeOutput', value?: string | null, traitType?: string | null }> } } | null } | { __typename?: 'Mirror', id: any, reaction?: ReactionTypes | null, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', name?: string | null, handle: any }, collectModule: { __typename?: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, contractAddress: any, followerOnly: boolean, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', symbol: string, decimals: number, address: any } } } | { __typename?: 'FreeCollectModuleSettings', type: CollectModules, contractAddress: any, followerOnly: boolean } | { __typename?: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, contractAddress: any, followerOnly: boolean, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', symbol: string, decimals: number, address: any } } } | { __typename?: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, endTimestamp: any, referralFee: number, contractAddress: any, followerOnly: boolean, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', symbol: string, decimals: number, address: any } } } | { __typename?: 'RevertCollectModuleSettings' } | { __typename?: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, endTimestamp: any, referralFee: number, contractAddress: any, followerOnly: boolean, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', symbol: string, decimals: number, address: any } } } | { __typename?: 'UnknownCollectModuleSettings' }, stats: { __typename?: 'PublicationStats', totalUpvotes: number, totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, contentWarning?: PublicationContentWarning | null, tags: Array<string>, cover?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', value?: string | null, traitType?: string | null }> }, mirrorOf: { __typename?: 'Comment', id: any, reaction?: ReactionTypes | null, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isDefault: boolean, isFollowedByMe: boolean, dispatcher?: { __typename?: 'Dispatcher', canUseRelay: boolean } | null, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number }, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalUpvotes: number, totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number } } | { __typename?: 'Post', id: any, reaction?: ReactionTypes | null, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isDefault: boolean, isFollowedByMe: boolean, dispatcher?: { __typename?: 'Dispatcher', canUseRelay: boolean } | null, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number }, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, contentWarning?: PublicationContentWarning | null, tags: Array<string>, cover?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', value?: string | null, traitType?: string | null }> }, stats: { __typename?: 'PublicationStats', totalUpvotes: number, totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number } } } | { __typename?: 'Post', mirroredByMe: boolean, id: any, reaction?: ReactionTypes | null, collectNftAddress?: any | null, onChainContentURI: string, hidden: boolean, hasCollectedByMe: boolean, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isDefault: boolean, isFollowedByMe: boolean, dispatcher?: { __typename?: 'Dispatcher', canUseRelay: boolean } | null, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number }, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, collectedBy?: { __typename?: 'Wallet', address: any, defaultProfile?: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null, dispatcher?: { __typename?: 'Dispatcher', canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number } } | null } | null, referenceModule?: { __typename: 'DegreesOfSeparationReferenceModuleSettings' } | { __typename: 'FollowOnlyReferenceModuleSettings' } | { __typename: 'UnknownReferenceModuleSettings' } | null, canComment: { __typename?: 'CanCommentResponse', result: boolean }, canMirror: { __typename?: 'CanMirrorResponse', result: boolean }, collectModule: { __typename?: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, contractAddress: any, followerOnly: boolean, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', symbol: string, decimals: number, address: any } } } | { __typename?: 'FreeCollectModuleSettings', type: CollectModules, contractAddress: any, followerOnly: boolean } | { __typename?: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, contractAddress: any, followerOnly: boolean, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', symbol: string, decimals: number, address: any } } } | { __typename?: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, endTimestamp: any, referralFee: number, contractAddress: any, followerOnly: boolean, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', symbol: string, decimals: number, address: any } } } | { __typename?: 'RevertCollectModuleSettings' } | { __typename?: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, endTimestamp: any, referralFee: number, contractAddress: any, followerOnly: boolean, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', symbol: string, decimals: number, address: any } } } | { __typename?: 'UnknownCollectModuleSettings' }, stats: { __typename?: 'PublicationStats', totalAmountOfComments: number, totalAmountOfCollects: number, totalAmountOfMirrors: number, totalUpvotes: number, totalDownvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, contentWarning?: PublicationContentWarning | null, mainContentFocus: PublicationMainFocus, tags: Array<string>, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, cover?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | null, attributes: Array<{ __typename?: 'MetadataAttributeOutput', value?: string | null, traitType?: string | null }> } }>, pageInfo: { __typename?: 'PaginatedResultInfo', totalCount?: number | null, next?: any | null } } };

export type ProxyActionMutationVariables = Exact<{
  request: ProxyActionRequest;
}>;


export type ProxyActionMutation = { __typename?: 'Mutation', proxyAction: any };

export type PublicationRevenueQueryVariables = Exact<{
  request: PublicationRevenueQueryRequest;
}>;


export type PublicationRevenueQuery = { __typename?: 'Query', publicationRevenue?: { __typename?: 'PublicationRevenue', revenue: { __typename?: 'RevenueAggregate', total: { __typename?: 'Erc20Amount', value: string } } } | null };

export type RemoveReactionMutationVariables = Exact<{
  request: ReactionRequest;
}>;


export type RemoveReactionMutation = { __typename?: 'Mutation', removeReaction?: any | null };

export type UserCollectionQueryVariables = Exact<{
  request: PublicationsQueryRequest;
  reactionRequest?: InputMaybe<ReactionFieldResolverRequest>;
  channelId?: InputMaybe<Scalars['ProfileId']>;
}>;


export type UserCollectionQuery = { __typename?: 'Query', publications: { __typename?: 'PaginatedPublicationResult', items: Array<{ __typename?: 'Comment' } | { __typename?: 'Mirror' } | { __typename?: 'Post', mirroredByMe: boolean, id: any, reaction?: ReactionTypes | null, collectNftAddress?: any | null, onChainContentURI: string, hidden: boolean, hasCollectedByMe: boolean, createdAt: any, appId?: any | null, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isDefault: boolean, isFollowedByMe: boolean, dispatcher?: { __typename?: 'Dispatcher', canUseRelay: boolean } | null, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number }, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, collectedBy?: { __typename?: 'Wallet', address: any, defaultProfile?: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, coverPicture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null, dispatcher?: { __typename?: 'Dispatcher', canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number } } | null } | null, referenceModule?: { __typename: 'DegreesOfSeparationReferenceModuleSettings' } | { __typename: 'FollowOnlyReferenceModuleSettings' } | { __typename: 'UnknownReferenceModuleSettings' } | null, canComment: { __typename?: 'CanCommentResponse', result: boolean }, canMirror: { __typename?: 'CanMirrorResponse', result: boolean }, collectModule: { __typename?: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, contractAddress: any, followerOnly: boolean, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', symbol: string, decimals: number, address: any } } } | { __typename?: 'FreeCollectModuleSettings', type: CollectModules, contractAddress: any, followerOnly: boolean } | { __typename?: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, contractAddress: any, followerOnly: boolean, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', symbol: string, decimals: number, address: any } } } | { __typename?: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, endTimestamp: any, referralFee: number, contractAddress: any, followerOnly: boolean, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', symbol: string, decimals: number, address: any } } } | { __typename?: 'RevertCollectModuleSettings' } | { __typename?: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, endTimestamp: any, referralFee: number, contractAddress: any, followerOnly: boolean, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', symbol: string, decimals: number, address: any } } } | { __typename?: 'UnknownCollectModuleSettings' }, stats: { __typename?: 'PublicationStats', totalAmountOfComments: number, totalAmountOfCollects: number, totalAmountOfMirrors: number, totalUpvotes: number, totalDownvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, contentWarning?: PublicationContentWarning | null, mainContentFocus: PublicationMainFocus, tags: Array<string>, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, cover?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | null, attributes: Array<{ __typename?: 'MetadataAttributeOutput', value?: string | null, traitType?: string | null }> } }>, pageInfo: { __typename?: 'PaginatedResultInfo', totalCount?: number | null, next?: any | null } } };

export const ProfileFieldsFragmentDoc = gql`
    fragment ProfileFields on Profile {
  id
  name
  handle
  bio
  ownedBy
  isDefault
  isFollowedByMe
  dispatcher {
    canUseRelay
  }
  attributes {
    key
    value
  }
  stats {
    totalFollowers
    totalFollowing
    totalPosts
  }
  coverPicture {
    ... on MediaSet {
      original {
        url
      }
    }
    ... on NftImage {
      uri
    }
  }
  picture {
    ... on MediaSet {
      original {
        url
      }
    }
    ... on NftImage {
      uri
    }
  }
  followModule {
    __typename
  }
}
    `;
export const MinimalProfileFieldsFragmentDoc = gql`
    fragment MinimalProfileFields on Profile {
  id
  name
  handle
  bio
  ownedBy
  attributes {
    key
    value
  }
  picture {
    ... on MediaSet {
      original {
        url
      }
    }
    ... on NftImage {
      uri
    }
  }
  coverPicture {
    ... on MediaSet {
      original {
        url
      }
    }
    ... on NftImage {
      uri
    }
  }
  followModule {
    __typename
  }
  dispatcher {
    canUseRelay
  }
  stats {
    totalFollowers
    totalFollowing
  }
}
    `;
export const CollectModuleFieldsFragmentDoc = gql`
    fragment CollectModuleFields on CollectModule {
  ... on FreeCollectModuleSettings {
    type
    contractAddress
    followerOnly
  }
  ... on FeeCollectModuleSettings {
    type
    recipient
    referralFee
    contractAddress
    followerOnly
    amount {
      asset {
        symbol
        decimals
        address
      }
      value
    }
  }
  ... on LimitedFeeCollectModuleSettings {
    type
    collectLimit
    recipient
    referralFee
    contractAddress
    followerOnly
    amount {
      asset {
        symbol
        decimals
        address
      }
      value
    }
  }
  ... on LimitedTimedFeeCollectModuleSettings {
    type
    collectLimit
    recipient
    endTimestamp
    referralFee
    contractAddress
    followerOnly
    amount {
      asset {
        symbol
        decimals
        address
      }
      value
    }
  }
  ... on TimedFeeCollectModuleSettings {
    type
    recipient
    endTimestamp
    referralFee
    contractAddress
    followerOnly
    amount {
      asset {
        symbol
        decimals
        address
      }
      value
    }
  }
}
    `;
export const PostFieldsFragmentDoc = gql`
    fragment PostFields on Post {
  mirroredByMe @client
  id
  reaction(request: $reactionRequest)
  profile {
    ...ProfileFields
  }
  collectedBy {
    address
    defaultProfile {
      ...MinimalProfileFields
    }
  }
  referenceModule {
    __typename
  }
  canComment(profileId: $channelId) {
    result
  }
  canMirror(profileId: $channelId) {
    result
  }
  collectModule {
    ...CollectModuleFields
  }
  collectNftAddress
  onChainContentURI
  hidden
  hasCollectedByMe
  stats {
    totalAmountOfComments
    totalAmountOfCollects
    totalAmountOfMirrors
    totalUpvotes
    totalDownvotes
  }
  metadata {
    name
    description
    content
    contentWarning
    mainContentFocus
    tags
    media {
      original {
        url
        mimeType
      }
    }
    cover {
      original {
        url
      }
    }
    attributes {
      value
      traitType
    }
  }
  createdAt
  appId
}
    ${ProfileFieldsFragmentDoc}
${MinimalProfileFieldsFragmentDoc}
${CollectModuleFieldsFragmentDoc}`;
export const MetadataFieldsFragmentDoc = gql`
    fragment MetadataFields on MetadataOutput {
  name
  description
  content
  contentWarning
  tags
  cover {
    original {
      url
    }
  }
  media {
    original {
      url
      mimeType
    }
  }
  attributes {
    value
    traitType
  }
}
    `;
export const MirrorFieldsFragmentDoc = gql`
    fragment MirrorFields on Mirror {
  id
  profile {
    name
    handle
  }
  reaction(request: $reactionRequest)
  collectModule {
    ...CollectModuleFields
  }
  stats {
    totalUpvotes
    totalAmountOfMirrors
    totalAmountOfCollects
    totalAmountOfComments
  }
  metadata {
    ...MetadataFields
  }
  mirrorOf {
    ... on Post {
      id
      profile {
        ...ProfileFields
      }
      metadata {
        ...MetadataFields
      }
      reaction(request: $reactionRequest)
      stats {
        totalUpvotes
        totalAmountOfMirrors
        totalAmountOfCollects
        totalAmountOfComments
      }
    }
    ... on Comment {
      id
      profile {
        ...ProfileFields
      }
      reaction(request: $reactionRequest)
      stats {
        totalUpvotes
        totalAmountOfMirrors
        totalAmountOfCollects
        totalAmountOfComments
      }
    }
  }
  createdAt
  appId
}
    ${CollectModuleFieldsFragmentDoc}
${MetadataFieldsFragmentDoc}
${ProfileFieldsFragmentDoc}`;
export const CommentFieldsFragmentDoc = gql`
    fragment CommentFields on Comment {
  id
  profile {
    ...ProfileFields
  }
  reaction(request: $reactionRequest)
  collectedBy {
    address
    defaultProfile {
      ...MinimalProfileFields
    }
  }
  hidden
  collectModule {
    ...CollectModuleFields
  }
  stats {
    totalDownvotes
    totalUpvotes
  }
  metadata {
    name
    description
    content
    media {
      original {
        url
        mimeType
      }
    }
    attributes {
      traitType
      value
    }
  }
  commentOn {
    ... on Post {
      id
      createdAt
      profile {
        ...ProfileFields
      }
      metadata {
        name
        cover {
          original {
            url
          }
        }
        attributes {
          value
          traitType
        }
      }
    }
  }
  createdAt
  appId
}
    ${ProfileFieldsFragmentDoc}
${MinimalProfileFieldsFragmentDoc}
${CollectModuleFieldsFragmentDoc}`;
export const RelayerResultFragmentDoc = gql`
    fragment RelayerResult on RelayResult {
  ... on RelayerResult {
    txId
    txHash
  }
  ... on RelayError {
    reason
  }
}
    `;
export const AddReactionDocument = gql`
    mutation AddReaction($request: ReactionRequest!) {
  addReaction(request: $request)
}
    `;
export type AddReactionMutationFn = Apollo.MutationFunction<AddReactionMutation, AddReactionMutationVariables>;

/**
 * __useAddReactionMutation__
 *
 * To run a mutation, you first call `useAddReactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddReactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addReactionMutation, { data, loading, error }] = useAddReactionMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useAddReactionMutation(baseOptions?: Apollo.MutationHookOptions<AddReactionMutation, AddReactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddReactionMutation, AddReactionMutationVariables>(AddReactionDocument, options);
      }
export type AddReactionMutationHookResult = ReturnType<typeof useAddReactionMutation>;
export type AddReactionMutationResult = Apollo.MutationResult<AddReactionMutation>;
export type AddReactionMutationOptions = Apollo.BaseMutationOptions<AddReactionMutation, AddReactionMutationVariables>;
export const ApprovedModuleAllowanceAmountDocument = gql`
    query ApprovedModuleAllowanceAmount($request: ApprovedModuleAllowanceAmountRequest!) {
  approvedModuleAllowanceAmount(request: $request) {
    currency
    module
    allowance
    contractAddress
  }
  enabledModuleCurrencies {
    name
    symbol
    decimals
    address
  }
}
    `;

/**
 * __useApprovedModuleAllowanceAmountQuery__
 *
 * To run a query within a React component, call `useApprovedModuleAllowanceAmountQuery` and pass it any options that fit your needs.
 * When your component renders, `useApprovedModuleAllowanceAmountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApprovedModuleAllowanceAmountQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useApprovedModuleAllowanceAmountQuery(baseOptions: Apollo.QueryHookOptions<ApprovedModuleAllowanceAmountQuery, ApprovedModuleAllowanceAmountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ApprovedModuleAllowanceAmountQuery, ApprovedModuleAllowanceAmountQueryVariables>(ApprovedModuleAllowanceAmountDocument, options);
      }
export function useApprovedModuleAllowanceAmountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ApprovedModuleAllowanceAmountQuery, ApprovedModuleAllowanceAmountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ApprovedModuleAllowanceAmountQuery, ApprovedModuleAllowanceAmountQueryVariables>(ApprovedModuleAllowanceAmountDocument, options);
        }
export type ApprovedModuleAllowanceAmountQueryHookResult = ReturnType<typeof useApprovedModuleAllowanceAmountQuery>;
export type ApprovedModuleAllowanceAmountLazyQueryHookResult = ReturnType<typeof useApprovedModuleAllowanceAmountLazyQuery>;
export type ApprovedModuleAllowanceAmountQueryResult = Apollo.QueryResult<ApprovedModuleAllowanceAmountQuery, ApprovedModuleAllowanceAmountQueryVariables>;
export const AuthenticateDocument = gql`
    mutation Authenticate($request: SignedAuthChallenge!) {
  authenticate(request: $request) {
    accessToken
    refreshToken
  }
}
    `;
export type AuthenticateMutationFn = Apollo.MutationFunction<AuthenticateMutation, AuthenticateMutationVariables>;

/**
 * __useAuthenticateMutation__
 *
 * To run a mutation, you first call `useAuthenticateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthenticateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authenticateMutation, { data, loading, error }] = useAuthenticateMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useAuthenticateMutation(baseOptions?: Apollo.MutationHookOptions<AuthenticateMutation, AuthenticateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuthenticateMutation, AuthenticateMutationVariables>(AuthenticateDocument, options);
      }
export type AuthenticateMutationHookResult = ReturnType<typeof useAuthenticateMutation>;
export type AuthenticateMutationResult = Apollo.MutationResult<AuthenticateMutation>;
export type AuthenticateMutationOptions = Apollo.BaseMutationOptions<AuthenticateMutation, AuthenticateMutationVariables>;
export const BroadcastDocument = gql`
    mutation Broadcast($request: BroadcastRequest!) {
  broadcast(request: $request) {
    ... on RelayerResult {
      txId
      txHash
    }
    ... on RelayError {
      reason
    }
  }
}
    `;
export type BroadcastMutationFn = Apollo.MutationFunction<BroadcastMutation, BroadcastMutationVariables>;

/**
 * __useBroadcastMutation__
 *
 * To run a mutation, you first call `useBroadcastMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBroadcastMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [broadcastMutation, { data, loading, error }] = useBroadcastMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useBroadcastMutation(baseOptions?: Apollo.MutationHookOptions<BroadcastMutation, BroadcastMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BroadcastMutation, BroadcastMutationVariables>(BroadcastDocument, options);
      }
export type BroadcastMutationHookResult = ReturnType<typeof useBroadcastMutation>;
export type BroadcastMutationResult = Apollo.MutationResult<BroadcastMutation>;
export type BroadcastMutationOptions = Apollo.BaseMutationOptions<BroadcastMutation, BroadcastMutationVariables>;
export const ChallengeDocument = gql`
    query Challenge($request: ChallengeRequest!) {
  challenge(request: $request) {
    text
  }
}
    `;

/**
 * __useChallengeQuery__
 *
 * To run a query within a React component, call `useChallengeQuery` and pass it any options that fit your needs.
 * When your component renders, `useChallengeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChallengeQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useChallengeQuery(baseOptions: Apollo.QueryHookOptions<ChallengeQuery, ChallengeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChallengeQuery, ChallengeQueryVariables>(ChallengeDocument, options);
      }
export function useChallengeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChallengeQuery, ChallengeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChallengeQuery, ChallengeQueryVariables>(ChallengeDocument, options);
        }
export type ChallengeQueryHookResult = ReturnType<typeof useChallengeQuery>;
export type ChallengeLazyQueryHookResult = ReturnType<typeof useChallengeLazyQuery>;
export type ChallengeQueryResult = Apollo.QueryResult<ChallengeQuery, ChallengeQueryVariables>;
export const CollectorsDocument = gql`
    query Collectors($request: WhoCollectedPublicationRequest!) {
  whoCollectedPublication(request: $request) {
    items {
      address
      defaultProfile {
        ...ProfileFields
        isFollowedByMe
      }
    }
    pageInfo {
      next
      totalCount
    }
  }
}
    ${ProfileFieldsFragmentDoc}`;

/**
 * __useCollectorsQuery__
 *
 * To run a query within a React component, call `useCollectorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectorsQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCollectorsQuery(baseOptions: Apollo.QueryHookOptions<CollectorsQuery, CollectorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CollectorsQuery, CollectorsQueryVariables>(CollectorsDocument, options);
      }
export function useCollectorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CollectorsQuery, CollectorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CollectorsQuery, CollectorsQueryVariables>(CollectorsDocument, options);
        }
export type CollectorsQueryHookResult = ReturnType<typeof useCollectorsQuery>;
export type CollectorsLazyQueryHookResult = ReturnType<typeof useCollectorsLazyQuery>;
export type CollectorsQueryResult = Apollo.QueryResult<CollectorsQuery, CollectorsQueryVariables>;
export const CommentsFeedDocument = gql`
    query CommentsFeed($request: PublicationsQueryRequest!, $reactionRequest: ReactionFieldResolverRequest) {
  publications(request: $request) {
    items {
      ... on Comment {
        ...CommentFields
      }
    }
    pageInfo {
      totalCount
      next
    }
  }
}
    ${CommentFieldsFragmentDoc}`;

/**
 * __useCommentsFeedQuery__
 *
 * To run a query within a React component, call `useCommentsFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommentsFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommentsFeedQuery({
 *   variables: {
 *      request: // value for 'request'
 *      reactionRequest: // value for 'reactionRequest'
 *   },
 * });
 */
export function useCommentsFeedQuery(baseOptions: Apollo.QueryHookOptions<CommentsFeedQuery, CommentsFeedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CommentsFeedQuery, CommentsFeedQueryVariables>(CommentsFeedDocument, options);
      }
export function useCommentsFeedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CommentsFeedQuery, CommentsFeedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CommentsFeedQuery, CommentsFeedQueryVariables>(CommentsFeedDocument, options);
        }
export type CommentsFeedQueryHookResult = ReturnType<typeof useCommentsFeedQuery>;
export type CommentsFeedLazyQueryHookResult = ReturnType<typeof useCommentsFeedLazyQuery>;
export type CommentsFeedQueryResult = Apollo.QueryResult<CommentsFeedQuery, CommentsFeedQueryVariables>;
export const CreateCollectTypedDataDocument = gql`
    mutation CreateCollectTypedData($options: TypedDataOptions, $request: CreateCollectRequest!) {
  createCollectTypedData(options: $options, request: $request) {
    id
    expiresAt
    typedData {
      types {
        CollectWithSig {
          name
          type
        }
      }
      domain {
        name
        chainId
        version
        verifyingContract
      }
      value {
        nonce
        deadline
        profileId
        pubId
        data
      }
    }
  }
}
    `;
export type CreateCollectTypedDataMutationFn = Apollo.MutationFunction<CreateCollectTypedDataMutation, CreateCollectTypedDataMutationVariables>;

/**
 * __useCreateCollectTypedDataMutation__
 *
 * To run a mutation, you first call `useCreateCollectTypedDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCollectTypedDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCollectTypedDataMutation, { data, loading, error }] = useCreateCollectTypedDataMutation({
 *   variables: {
 *      options: // value for 'options'
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateCollectTypedDataMutation(baseOptions?: Apollo.MutationHookOptions<CreateCollectTypedDataMutation, CreateCollectTypedDataMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCollectTypedDataMutation, CreateCollectTypedDataMutationVariables>(CreateCollectTypedDataDocument, options);
      }
export type CreateCollectTypedDataMutationHookResult = ReturnType<typeof useCreateCollectTypedDataMutation>;
export type CreateCollectTypedDataMutationResult = Apollo.MutationResult<CreateCollectTypedDataMutation>;
export type CreateCollectTypedDataMutationOptions = Apollo.BaseMutationOptions<CreateCollectTypedDataMutation, CreateCollectTypedDataMutationVariables>;
export const CreateCommentTypedDataDocument = gql`
    mutation CreateCommentTypedData($options: TypedDataOptions, $request: CreatePublicCommentRequest!) {
  createCommentTypedData(options: $options, request: $request) {
    id
    expiresAt
    typedData {
      types {
        CommentWithSig {
          name
          type
        }
      }
      domain {
        name
        chainId
        version
        verifyingContract
      }
      value {
        nonce
        deadline
        profileId
        profileIdPointed
        pubIdPointed
        contentURI
        collectModule
        collectModuleInitData
        referenceModule
        referenceModuleData
        referenceModuleInitData
      }
    }
  }
}
    `;
export type CreateCommentTypedDataMutationFn = Apollo.MutationFunction<CreateCommentTypedDataMutation, CreateCommentTypedDataMutationVariables>;

/**
 * __useCreateCommentTypedDataMutation__
 *
 * To run a mutation, you first call `useCreateCommentTypedDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentTypedDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentTypedDataMutation, { data, loading, error }] = useCreateCommentTypedDataMutation({
 *   variables: {
 *      options: // value for 'options'
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateCommentTypedDataMutation(baseOptions?: Apollo.MutationHookOptions<CreateCommentTypedDataMutation, CreateCommentTypedDataMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCommentTypedDataMutation, CreateCommentTypedDataMutationVariables>(CreateCommentTypedDataDocument, options);
      }
export type CreateCommentTypedDataMutationHookResult = ReturnType<typeof useCreateCommentTypedDataMutation>;
export type CreateCommentTypedDataMutationResult = Apollo.MutationResult<CreateCommentTypedDataMutation>;
export type CreateCommentTypedDataMutationOptions = Apollo.BaseMutationOptions<CreateCommentTypedDataMutation, CreateCommentTypedDataMutationVariables>;
export const CreateCommentViaDispatcherDocument = gql`
    mutation CreateCommentViaDispatcher($request: CreatePublicCommentRequest!) {
  createCommentViaDispatcher(request: $request) {
    ...RelayerResult
  }
}
    ${RelayerResultFragmentDoc}`;
export type CreateCommentViaDispatcherMutationFn = Apollo.MutationFunction<CreateCommentViaDispatcherMutation, CreateCommentViaDispatcherMutationVariables>;

/**
 * __useCreateCommentViaDispatcherMutation__
 *
 * To run a mutation, you first call `useCreateCommentViaDispatcherMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentViaDispatcherMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentViaDispatcherMutation, { data, loading, error }] = useCreateCommentViaDispatcherMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateCommentViaDispatcherMutation(baseOptions?: Apollo.MutationHookOptions<CreateCommentViaDispatcherMutation, CreateCommentViaDispatcherMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCommentViaDispatcherMutation, CreateCommentViaDispatcherMutationVariables>(CreateCommentViaDispatcherDocument, options);
      }
export type CreateCommentViaDispatcherMutationHookResult = ReturnType<typeof useCreateCommentViaDispatcherMutation>;
export type CreateCommentViaDispatcherMutationResult = Apollo.MutationResult<CreateCommentViaDispatcherMutation>;
export type CreateCommentViaDispatcherMutationOptions = Apollo.BaseMutationOptions<CreateCommentViaDispatcherMutation, CreateCommentViaDispatcherMutationVariables>;
export const CreateFollowTypedDataDocument = gql`
    mutation CreateFollowTypedData($options: TypedDataOptions, $request: FollowRequest!) {
  createFollowTypedData(options: $options, request: $request) {
    id
    expiresAt
    typedData {
      domain {
        name
        chainId
        version
        verifyingContract
      }
      types {
        FollowWithSig {
          name
          type
        }
      }
      value {
        nonce
        deadline
        profileIds
        datas
      }
    }
  }
}
    `;
export type CreateFollowTypedDataMutationFn = Apollo.MutationFunction<CreateFollowTypedDataMutation, CreateFollowTypedDataMutationVariables>;

/**
 * __useCreateFollowTypedDataMutation__
 *
 * To run a mutation, you first call `useCreateFollowTypedDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFollowTypedDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFollowTypedDataMutation, { data, loading, error }] = useCreateFollowTypedDataMutation({
 *   variables: {
 *      options: // value for 'options'
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateFollowTypedDataMutation(baseOptions?: Apollo.MutationHookOptions<CreateFollowTypedDataMutation, CreateFollowTypedDataMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateFollowTypedDataMutation, CreateFollowTypedDataMutationVariables>(CreateFollowTypedDataDocument, options);
      }
export type CreateFollowTypedDataMutationHookResult = ReturnType<typeof useCreateFollowTypedDataMutation>;
export type CreateFollowTypedDataMutationResult = Apollo.MutationResult<CreateFollowTypedDataMutation>;
export type CreateFollowTypedDataMutationOptions = Apollo.BaseMutationOptions<CreateFollowTypedDataMutation, CreateFollowTypedDataMutationVariables>;
export const CreateMirrorTypedDataDocument = gql`
    mutation CreateMirrorTypedData($options: TypedDataOptions, $request: CreateMirrorRequest!) {
  createMirrorTypedData(options: $options, request: $request) {
    id
    expiresAt
    typedData {
      types {
        MirrorWithSig {
          name
          type
        }
      }
      domain {
        name
        chainId
        version
        verifyingContract
      }
      value {
        nonce
        deadline
        profileId
        profileIdPointed
        pubIdPointed
        referenceModule
        referenceModuleData
        referenceModuleInitData
      }
    }
  }
}
    `;
export type CreateMirrorTypedDataMutationFn = Apollo.MutationFunction<CreateMirrorTypedDataMutation, CreateMirrorTypedDataMutationVariables>;

/**
 * __useCreateMirrorTypedDataMutation__
 *
 * To run a mutation, you first call `useCreateMirrorTypedDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMirrorTypedDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMirrorTypedDataMutation, { data, loading, error }] = useCreateMirrorTypedDataMutation({
 *   variables: {
 *      options: // value for 'options'
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateMirrorTypedDataMutation(baseOptions?: Apollo.MutationHookOptions<CreateMirrorTypedDataMutation, CreateMirrorTypedDataMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMirrorTypedDataMutation, CreateMirrorTypedDataMutationVariables>(CreateMirrorTypedDataDocument, options);
      }
export type CreateMirrorTypedDataMutationHookResult = ReturnType<typeof useCreateMirrorTypedDataMutation>;
export type CreateMirrorTypedDataMutationResult = Apollo.MutationResult<CreateMirrorTypedDataMutation>;
export type CreateMirrorTypedDataMutationOptions = Apollo.BaseMutationOptions<CreateMirrorTypedDataMutation, CreateMirrorTypedDataMutationVariables>;
export const CreateMirrorViaDispatcherDocument = gql`
    mutation CreateMirrorViaDispatcher($request: CreateMirrorRequest!) {
  createMirrorViaDispatcher(request: $request) {
    ...RelayerResult
  }
}
    ${RelayerResultFragmentDoc}`;
export type CreateMirrorViaDispatcherMutationFn = Apollo.MutationFunction<CreateMirrorViaDispatcherMutation, CreateMirrorViaDispatcherMutationVariables>;

/**
 * __useCreateMirrorViaDispatcherMutation__
 *
 * To run a mutation, you first call `useCreateMirrorViaDispatcherMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMirrorViaDispatcherMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMirrorViaDispatcherMutation, { data, loading, error }] = useCreateMirrorViaDispatcherMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateMirrorViaDispatcherMutation(baseOptions?: Apollo.MutationHookOptions<CreateMirrorViaDispatcherMutation, CreateMirrorViaDispatcherMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMirrorViaDispatcherMutation, CreateMirrorViaDispatcherMutationVariables>(CreateMirrorViaDispatcherDocument, options);
      }
export type CreateMirrorViaDispatcherMutationHookResult = ReturnType<typeof useCreateMirrorViaDispatcherMutation>;
export type CreateMirrorViaDispatcherMutationResult = Apollo.MutationResult<CreateMirrorViaDispatcherMutation>;
export type CreateMirrorViaDispatcherMutationOptions = Apollo.BaseMutationOptions<CreateMirrorViaDispatcherMutation, CreateMirrorViaDispatcherMutationVariables>;
export const CurrentUserDocument = gql`
    query CurrentUser($ownedBy: [EthereumAddress!]) {
  profiles(request: {ownedBy: $ownedBy}) {
    items {
      ...MinimalProfileFields
      isDefault
    }
  }
  userSigNonces {
    lensHubOnChainSigNonce
  }
}
    ${MinimalProfileFieldsFragmentDoc}`;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *      ownedBy: // value for 'ownedBy'
 *   },
 * });
 */
export function useCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
      }
export function useCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = Apollo.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
export const EnabledCurrencyModulesDocument = gql`
    query EnabledCurrencyModules($request: ProfileQueryRequest!) {
  enabledModuleCurrencies {
    name
    symbol
    decimals
    address
  }
  profiles(request: $request) {
    items {
      followModule {
        __typename
      }
    }
  }
}
    `;

/**
 * __useEnabledCurrencyModulesQuery__
 *
 * To run a query within a React component, call `useEnabledCurrencyModulesQuery` and pass it any options that fit your needs.
 * When your component renders, `useEnabledCurrencyModulesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEnabledCurrencyModulesQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useEnabledCurrencyModulesQuery(baseOptions: Apollo.QueryHookOptions<EnabledCurrencyModulesQuery, EnabledCurrencyModulesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EnabledCurrencyModulesQuery, EnabledCurrencyModulesQueryVariables>(EnabledCurrencyModulesDocument, options);
      }
export function useEnabledCurrencyModulesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EnabledCurrencyModulesQuery, EnabledCurrencyModulesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EnabledCurrencyModulesQuery, EnabledCurrencyModulesQueryVariables>(EnabledCurrencyModulesDocument, options);
        }
export type EnabledCurrencyModulesQueryHookResult = ReturnType<typeof useEnabledCurrencyModulesQuery>;
export type EnabledCurrencyModulesLazyQueryHookResult = ReturnType<typeof useEnabledCurrencyModulesLazyQuery>;
export type EnabledCurrencyModulesQueryResult = Apollo.QueryResult<EnabledCurrencyModulesQuery, EnabledCurrencyModulesQueryVariables>;
export const GenerateModuleCurrencyApprovalDataDocument = gql`
    query GenerateModuleCurrencyApprovalData($request: GenerateModuleCurrencyApprovalDataRequest!) {
  generateModuleCurrencyApprovalData(request: $request) {
    to
    from
    data
  }
}
    `;

/**
 * __useGenerateModuleCurrencyApprovalDataQuery__
 *
 * To run a query within a React component, call `useGenerateModuleCurrencyApprovalDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGenerateModuleCurrencyApprovalDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGenerateModuleCurrencyApprovalDataQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useGenerateModuleCurrencyApprovalDataQuery(baseOptions: Apollo.QueryHookOptions<GenerateModuleCurrencyApprovalDataQuery, GenerateModuleCurrencyApprovalDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GenerateModuleCurrencyApprovalDataQuery, GenerateModuleCurrencyApprovalDataQueryVariables>(GenerateModuleCurrencyApprovalDataDocument, options);
      }
export function useGenerateModuleCurrencyApprovalDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GenerateModuleCurrencyApprovalDataQuery, GenerateModuleCurrencyApprovalDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GenerateModuleCurrencyApprovalDataQuery, GenerateModuleCurrencyApprovalDataQueryVariables>(GenerateModuleCurrencyApprovalDataDocument, options);
        }
export type GenerateModuleCurrencyApprovalDataQueryHookResult = ReturnType<typeof useGenerateModuleCurrencyApprovalDataQuery>;
export type GenerateModuleCurrencyApprovalDataLazyQueryHookResult = ReturnType<typeof useGenerateModuleCurrencyApprovalDataLazyQuery>;
export type GenerateModuleCurrencyApprovalDataQueryResult = Apollo.QueryResult<GenerateModuleCurrencyApprovalDataQuery, GenerateModuleCurrencyApprovalDataQueryVariables>;
export const HasPublicationIndexedDocument = gql`
    query HasPublicationIndexed($request: PublicationQueryRequest!) {
  publication(request: $request) {
    ... on Post {
      id
    }
  }
}
    `;

/**
 * __useHasPublicationIndexedQuery__
 *
 * To run a query within a React component, call `useHasPublicationIndexedQuery` and pass it any options that fit your needs.
 * When your component renders, `useHasPublicationIndexedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHasPublicationIndexedQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useHasPublicationIndexedQuery(baseOptions: Apollo.QueryHookOptions<HasPublicationIndexedQuery, HasPublicationIndexedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HasPublicationIndexedQuery, HasPublicationIndexedQueryVariables>(HasPublicationIndexedDocument, options);
      }
export function useHasPublicationIndexedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HasPublicationIndexedQuery, HasPublicationIndexedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HasPublicationIndexedQuery, HasPublicationIndexedQueryVariables>(HasPublicationIndexedDocument, options);
        }
export type HasPublicationIndexedQueryHookResult = ReturnType<typeof useHasPublicationIndexedQuery>;
export type HasPublicationIndexedLazyQueryHookResult = ReturnType<typeof useHasPublicationIndexedLazyQuery>;
export type HasPublicationIndexedQueryResult = Apollo.QueryResult<HasPublicationIndexedQuery, HasPublicationIndexedQueryVariables>;
export const HasTxHashBeenIndexedDocument = gql`
    query HasTxHashBeenIndexed($request: HasTxHashBeenIndexedRequest!) {
  hasTxHashBeenIndexed(request: $request) {
    ... on TransactionIndexedResult {
      indexed
      txReceipt {
        transactionHash
      }
    }
    ... on TransactionError {
      reason
    }
  }
}
    `;

/**
 * __useHasTxHashBeenIndexedQuery__
 *
 * To run a query within a React component, call `useHasTxHashBeenIndexedQuery` and pass it any options that fit your needs.
 * When your component renders, `useHasTxHashBeenIndexedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHasTxHashBeenIndexedQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useHasTxHashBeenIndexedQuery(baseOptions: Apollo.QueryHookOptions<HasTxHashBeenIndexedQuery, HasTxHashBeenIndexedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HasTxHashBeenIndexedQuery, HasTxHashBeenIndexedQueryVariables>(HasTxHashBeenIndexedDocument, options);
      }
export function useHasTxHashBeenIndexedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HasTxHashBeenIndexedQuery, HasTxHashBeenIndexedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HasTxHashBeenIndexedQuery, HasTxHashBeenIndexedQueryVariables>(HasTxHashBeenIndexedDocument, options);
        }
export type HasTxHashBeenIndexedQueryHookResult = ReturnType<typeof useHasTxHashBeenIndexedQuery>;
export type HasTxHashBeenIndexedLazyQueryHookResult = ReturnType<typeof useHasTxHashBeenIndexedLazyQuery>;
export type HasTxHashBeenIndexedQueryResult = Apollo.QueryResult<HasTxHashBeenIndexedQuery, HasTxHashBeenIndexedQueryVariables>;
export const ProfileFeedDocument = gql`
    query ProfileFeed($request: PublicationsQueryRequest!, $reactionRequest: ReactionFieldResolverRequest, $channelId: ProfileId) {
  publications(request: $request) {
    items {
      ... on Post {
        ...PostFields
      }
      ... on Comment {
        ...CommentFields
      }
      ... on Mirror {
        ...MirrorFields
      }
    }
    pageInfo {
      totalCount
      next
    }
  }
}
    ${PostFieldsFragmentDoc}
${CommentFieldsFragmentDoc}
${MirrorFieldsFragmentDoc}`;

/**
 * __useProfileFeedQuery__
 *
 * To run a query within a React component, call `useProfileFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileFeedQuery({
 *   variables: {
 *      request: // value for 'request'
 *      reactionRequest: // value for 'reactionRequest'
 *      channelId: // value for 'channelId'
 *   },
 * });
 */
export function useProfileFeedQuery(baseOptions: Apollo.QueryHookOptions<ProfileFeedQuery, ProfileFeedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProfileFeedQuery, ProfileFeedQueryVariables>(ProfileFeedDocument, options);
      }
export function useProfileFeedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProfileFeedQuery, ProfileFeedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProfileFeedQuery, ProfileFeedQueryVariables>(ProfileFeedDocument, options);
        }
export type ProfileFeedQueryHookResult = ReturnType<typeof useProfileFeedQuery>;
export type ProfileFeedLazyQueryHookResult = ReturnType<typeof useProfileFeedLazyQuery>;
export type ProfileFeedQueryResult = Apollo.QueryResult<ProfileFeedQuery, ProfileFeedQueryVariables>;
export const ProxyActionDocument = gql`
    mutation ProxyAction($request: ProxyActionRequest!) {
  proxyAction(request: $request)
}
    `;
export type ProxyActionMutationFn = Apollo.MutationFunction<ProxyActionMutation, ProxyActionMutationVariables>;

/**
 * __useProxyActionMutation__
 *
 * To run a mutation, you first call `useProxyActionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useProxyActionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [proxyActionMutation, { data, loading, error }] = useProxyActionMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useProxyActionMutation(baseOptions?: Apollo.MutationHookOptions<ProxyActionMutation, ProxyActionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ProxyActionMutation, ProxyActionMutationVariables>(ProxyActionDocument, options);
      }
export type ProxyActionMutationHookResult = ReturnType<typeof useProxyActionMutation>;
export type ProxyActionMutationResult = Apollo.MutationResult<ProxyActionMutation>;
export type ProxyActionMutationOptions = Apollo.BaseMutationOptions<ProxyActionMutation, ProxyActionMutationVariables>;
export const PublicationRevenueDocument = gql`
    query PublicationRevenue($request: PublicationRevenueQueryRequest!) {
  publicationRevenue(request: $request) {
    revenue {
      total {
        value
      }
    }
  }
}
    `;

/**
 * __usePublicationRevenueQuery__
 *
 * To run a query within a React component, call `usePublicationRevenueQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublicationRevenueQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublicationRevenueQuery({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function usePublicationRevenueQuery(baseOptions: Apollo.QueryHookOptions<PublicationRevenueQuery, PublicationRevenueQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PublicationRevenueQuery, PublicationRevenueQueryVariables>(PublicationRevenueDocument, options);
      }
export function usePublicationRevenueLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PublicationRevenueQuery, PublicationRevenueQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PublicationRevenueQuery, PublicationRevenueQueryVariables>(PublicationRevenueDocument, options);
        }
export type PublicationRevenueQueryHookResult = ReturnType<typeof usePublicationRevenueQuery>;
export type PublicationRevenueLazyQueryHookResult = ReturnType<typeof usePublicationRevenueLazyQuery>;
export type PublicationRevenueQueryResult = Apollo.QueryResult<PublicationRevenueQuery, PublicationRevenueQueryVariables>;
export const RemoveReactionDocument = gql`
    mutation RemoveReaction($request: ReactionRequest!) {
  removeReaction(request: $request)
}
    `;
export type RemoveReactionMutationFn = Apollo.MutationFunction<RemoveReactionMutation, RemoveReactionMutationVariables>;

/**
 * __useRemoveReactionMutation__
 *
 * To run a mutation, you first call `useRemoveReactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveReactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeReactionMutation, { data, loading, error }] = useRemoveReactionMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useRemoveReactionMutation(baseOptions?: Apollo.MutationHookOptions<RemoveReactionMutation, RemoveReactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveReactionMutation, RemoveReactionMutationVariables>(RemoveReactionDocument, options);
      }
export type RemoveReactionMutationHookResult = ReturnType<typeof useRemoveReactionMutation>;
export type RemoveReactionMutationResult = Apollo.MutationResult<RemoveReactionMutation>;
export type RemoveReactionMutationOptions = Apollo.BaseMutationOptions<RemoveReactionMutation, RemoveReactionMutationVariables>;
export const UserCollectionDocument = gql`
    query UserCollection($request: PublicationsQueryRequest!, $reactionRequest: ReactionFieldResolverRequest, $channelId: ProfileId) {
  publications(request: $request) {
    items {
      ... on Post {
        ...PostFields
      }
    }
    pageInfo {
      totalCount
      next
    }
  }
}
    ${PostFieldsFragmentDoc}`;

/**
 * __useUserCollectionQuery__
 *
 * To run a query within a React component, call `useUserCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserCollectionQuery({
 *   variables: {
 *      request: // value for 'request'
 *      reactionRequest: // value for 'reactionRequest'
 *      channelId: // value for 'channelId'
 *   },
 * });
 */
export function useUserCollectionQuery(baseOptions: Apollo.QueryHookOptions<UserCollectionQuery, UserCollectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserCollectionQuery, UserCollectionQueryVariables>(UserCollectionDocument, options);
      }
export function useUserCollectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserCollectionQuery, UserCollectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserCollectionQuery, UserCollectionQueryVariables>(UserCollectionDocument, options);
        }
export type UserCollectionQueryHookResult = ReturnType<typeof useUserCollectionQuery>;
export type UserCollectionLazyQueryHookResult = ReturnType<typeof useUserCollectionLazyQuery>;
export type UserCollectionQueryResult = Apollo.QueryResult<UserCollectionQuery, UserCollectionQueryVariables>;