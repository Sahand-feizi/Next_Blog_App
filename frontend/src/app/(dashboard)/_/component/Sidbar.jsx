import SidbarSection from './SidbarSection'
import {
    ChatBubbleLeftRightIcon as OutlineChatBubbleLeftRightIcon,
    UsersIcon as OutlineUsersIcon,
    WalletIcon as OutlineWalletIcon,
    TagIcon as OutlineTagIcon
} from '@heroicons/react/24/outline'
import {
    ChatBubbleLeftRightIcon as SolidChatBubbleLeftRightIcon,
    UsersIcon as SolidUsersIcon,
    WalletIcon as SolidWalletIcon,
    TagIcon as SolidTagIcon
} from '@heroicons/react/24/solid'
import { LuLayoutDashboard } from "react-icons/lu";
import { RiDashboardFill } from "react-icons/ri";
import { ExitButton } from './Buttons'
import SidbarLogo from './SidbarLogo'

const MenuOptions = [
    {
        id: 1,
        title: 'داشبورد',
        path: '/profile',
        outlineIcon: <LuLayoutDashboard className='w-6 h-6' />,
        solidIcon: <RiDashboardFill className='w-6 h-6' />
    },
    {
        id: 2,
        title: 'پست ها',
        path: '/profile/posts',
        outlineIcon: <OutlineWalletIcon className='w-6 h-6' />,
        solidIcon: <SolidWalletIcon className='w-6 h-6' />
    },
    {
        id: 3,
        title: 'کاربران',
        path: '/profile/users',
        outlineIcon: <OutlineUsersIcon className='w-6 h-6' />,
        solidIcon: <SolidUsersIcon className='w-6 h-6' />
    },
    {
        id: 4,
        title: 'دسته بندی ها',
        path: '/profile/categories',
        outlineIcon: <OutlineTagIcon className='w-6 h-6' />,
        solidIcon: <SolidTagIcon className='w-6 h-6' />
    },
    {
        id: 5,
        title: 'نظرات',
        path: '/profile/comments',
        outlineIcon: <OutlineChatBubbleLeftRightIcon className='w-6 h-6' />,
        solidIcon: <SolidChatBubbleLeftRightIcon className='w-6 h-6' />
    },
]

function Sidbar() {
    return (
        <div className='bg-black flex flex-col pl-4 justify-between space-y-8 h-[95vh] lg:pl-10 py-6 rounded-xl'>
            <div className='flex flex-col gap-10'>
                <SidbarLogo className={'pr-4'} />
                <SidbarSection
                    title='منو'
                    options={MenuOptions}
                />
            </div>
            <ExitButton />
        </div>
    )
}

export default Sidbar
