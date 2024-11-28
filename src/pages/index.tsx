/*
 * @Author: leelongxi leelongxi@foxmail.com
 * @Date: 2024-11-28 14:53:26
 * @LastEditors: leelongxi leelongxi@foxmail.com
 * @LastEditTime: 2024-11-28 16:46:42
 * @FilePath: /next-chakra-rainbow-template/src/pages/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { Flex, Heading, IconButton, Text, useColorMode, Button } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import Head from 'next/head'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useRouter } from 'next/router';


export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode()
  const router = useRouter();
  const isDarkMode = colorMode === 'dark'

  function handleRoute(pathName: string) {
    router.push(pathName)
  }

  return (
    <>
      <Head>
        <title>TITLE</title>
        <meta name="description" content="DESCRIPTION" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Flex
          maxW="50ch"
          direction="column"
          mx="auto"
          px="6"
          py="8"
          textAlign="center"
          gap={4}
          borderRadius="xl"
          background="primary"
          mt={8}
        >
          <Heading as="h1">Hello world</Heading>
          <Text>This is a NextJS + Chakra-UI + RainbowKit app template</Text>
          <IconButton
            w="fit-content"
            mx="auto"
            icon={isDarkMode ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
            aria-label="Toggle color mode"
          />
          <ConnectButton />
          <Button onClick={handleRoute.bind(null, '/asset')}>资产</Button>
          <Button onClick={handleRoute.bind(null, '/task')}>任务</Button>
          <Button onClick={handleRoute.bind(null, '/shareholder')}>股东</Button>
        </Flex>
      </main>
    </>
  )
}
