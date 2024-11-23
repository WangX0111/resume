import { t } from "@lingui/macro";
import { List, SquaresFour } from "@phosphor-icons/react";
import { ScrollArea, Tabs, TabsContent, TabsList, TabsTrigger } from "@reactive-resume/ui";
import { motion } from "framer-motion";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

import { GridView } from "./_layouts/grid";
import { ListView } from "./_layouts/list";
import { UserOptions } from "@/client/components/user-options";
import { Button, KeyboardShortcut, Separator } from "@reactive-resume/ui";
import { UserAvatar } from "@/client/components/user-avatar";
import { useUser } from "@/client/services/user";

type Layout = "grid" | "list";

export const ResumesPage = () => {
  const [layout, setLayout] = useState<Layout>("grid");
  const{user} = useUser()
  return (
    <>
      <Helmet>
        <title>
          {t`Resumes`} - {t`Reactive Resume`}
        </title>
      </Helmet>

      <Tabs
        value={layout}
        className="space-y-4"
        onValueChange={(value) => {
          setLayout(value as Layout);
        }}
      >
        <div className="flex items-center justify-between">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl font-bold tracking-tight"
          >
            {t`Resumes`}
            <TabsList>
            <TabsTrigger value="grid" className="size-8 p-0 sm:h-8 sm:w-auto sm:px-4">
              <SquaresFour />
              <span className="ml-2 hidden sm:block">{t`Grid`}</span>
            </TabsTrigger>
            <TabsTrigger value="list" className="size-8 p-0 sm:h-8 sm:w-auto sm:px-4">
              <List />
              <span className="ml-2 hidden sm:block">{t`List`}</span>
            </TabsTrigger>
          </TabsList>
          
          </motion.h1>


        
        <UserOptions>
            <Button size="lg" variant="ghost" className="size-8 p-0 sm:h-8 sm:w-auto sm:px-4">
              <UserAvatar size={24} className="mr-3" />
              <span>{user?.name}</span>
            </Button>
          </UserOptions>
          </div>
        <ScrollArea className="h-[calc(100vh-140px)] lg:h-[calc(100vh-88px)]">
          <TabsContent value="grid">
            <GridView />
          </TabsContent>
          <TabsContent value="list">
            <ListView />
          </TabsContent>
        </ScrollArea>
      </Tabs>
    </>
  );
};
