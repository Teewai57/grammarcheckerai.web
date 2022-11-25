import React from 'react'

const NoHistory = () => {
    return (
        <div className='w-full text-center items-center '>
            <div className="mt-[20rem] space-y-3">
                <div className='flex justify-center'>
                    <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M99.0003 26.3332V51.6665H89.0003V26.3332C89.0003 24.5332 87.4003 23.6665 86.3337 23.6665C86.0003 23.6665 85.667 23.7332 85.3337 23.8665L32.467 43.7998C28.9337 45.1332 26.667 48.4665 26.667 52.2665V56.7332C20.6003 61.2665 16.667 68.5332 16.667 76.7332V52.2665C16.667 44.3332 21.5337 37.2665 28.9337 34.4665L81.867 14.4665C83.3337 13.9332 84.867 13.6665 86.3337 13.6665C93.0003 13.6665 99.0003 19.0665 99.0003 26.3332Z" fill="#8C54BF" />
                        <path d="M143.333 96.6668V103.333C143.333 105.133 141.933 106.6 140.067 106.667H130.333C126.8 106.667 123.6 104.067 123.333 100.6C123.133 98.5335 123.933 96.6002 125.267 95.2668C126.467 94.0002 128.133 93.3335 129.933 93.3335H140C141.933 93.4002 143.333 94.8668 143.333 96.6668Z" fill="#8C54BF" />
                        <path d="M129.867 86.3332H136.667C140.334 86.3332 143.334 83.3332 143.334 79.6665V76.7332C143.334 62.9332 132.067 51.6665 118.267 51.6665H41.7337C36.067 51.6665 30.867 53.5332 26.667 56.7332C20.6003 61.2665 16.667 68.5332 16.667 76.7332V121.6C16.667 135.4 27.9337 146.667 41.7337 146.667H118.267C132.067 146.667 143.334 135.4 143.334 121.6V120.333C143.334 116.666 140.334 113.666 136.667 113.666H130.867C124.467 113.666 118.334 109.733 116.667 103.533C115.267 98.4665 116.934 93.5998 120.267 90.3332C122.734 87.7998 126.134 86.3332 129.867 86.3332ZM93.3337 84.9998H46.667C43.9337 84.9998 41.667 82.7332 41.667 79.9998C41.667 77.2665 43.9337 74.9998 46.667 74.9998H93.3337C96.067 74.9998 98.3337 77.2665 98.3337 79.9998C98.3337 82.7332 96.067 84.9998 93.3337 84.9998Z" fill="#8C54BF" />
                    </svg>
                </div>

                <h3 className='text-[#393939] text-2xl font-bold font-sans'>Your conversation history is empty</h3>
                <p>Hold a conversation with our chatbot to get started</p>

            </div>
        </div>
    )
}

export default NoHistory