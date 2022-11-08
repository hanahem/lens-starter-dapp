import useUser from '@context/UserContext'
import displayPfp from '@utils/displayPfp'
import trimLongText from '@utils/trimLongText'
import React, { FC } from 'react'
import { BLOCK_EXPLORER_URL, LENSFRENS_URL, LENSTER_URL } from 'src/constants'

const ProfileCard: FC = () => {
  const { currentUser, defaultProfile } = useUser()

  if (!defaultProfile || !currentUser) {
    return null
  } else {
    const { coverPicture, picture, handle, id, name, ownedBy, stats } =
      defaultProfile
    return (
      <div className="rounded-xl shadow border-2 border-green h-[280px] w-[450px]">
        <div className="relative h-[100px] w-full">
          <img
            className="h-full w-full border-b-2 border-green rounded-t-xl"
            src={displayPfp(coverPicture)}
          />
          <img
            className="w-[80px] h-[80px] absolute -bottom-4 left-12 z-10 rounded-xl border-2 border-green"
            src={displayPfp(picture)}
          />
        </div>

        <div className="p-4 w-full flex flex-col justify-between">
          <div className="w-full flex items-start justify-between mt-4">
            <div className="flex flex-col items-start">
              <p className="font-semibold text-coal text-2xl leading-none">
                {trimLongText(name ?? handle)}
              </p>
              <p className="text-sm text-coal/80 leading-none">{handle}</p>
            </div>

            <div className="rounded px-2 bg-green/10 text-green text-xs">
              <p>#{id}</p>
            </div>
          </div>

          <div className="flex items-center justify-between w-full mt-14">
            <div className="flex items-end gap-4 justify-start">
              <div className="flex flex-col items-start">
                <p className="text-sm font-light leading-none">Followers</p>
                <p className="text-lg font-semibold leanding-none">
                  {stats?.totalFollowers}
                </p>
              </div>

              <div className="flex flex-col items-start">
                <p className="text-sm font-light leading-none">Following</p>
                <p className="text-lg font-semibold leanding-none">
                  {stats?.totalFollowing}
                </p>
              </div>
            </div>

            <div className="flex items-end justify-end gap-1">
              <a
                href={LENSFRENS_URL + '/u/' + handle}
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/350/seedling_1f331.png"
                  className="border border-green/50 rounded-full p-[2px] object-fit h-6 w-6"
                />
              </a>
              <a
                href={LENSTER_URL + '/u/' + handle}
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  src="https://lenster.xyz/logo.svg"
                  className="border border-green/50 rounded-full p-[2px] object-fit h-6 w-6"
                />
              </a>
              <a
                href={BLOCK_EXPLORER_URL + 'address/' + ownedBy}
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/polygon-token-4086724-3379854.png"
                  className="border border-green/50 rounded-full p-[2px] object-fit h-6 w-6"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileCard
