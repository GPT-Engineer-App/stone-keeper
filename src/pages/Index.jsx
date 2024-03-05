import { Box, Tab, Tabs, TabList, TabPanels, TabPanel, Input, FormControl, FormLabel, Button, Table, Thead, Tbody, Tr, Th, Td, Image, IconButton, useToast } from "@chakra-ui/react";
import { FaPlus, FaUpload, FaHistory, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  // Функции для обработки различных действий (псевдокод/заглушки)
  const handleAddItem = () => {
    // TODO: Реализовать логику добавления позиции на склад
    toast({ title: "Позиция добавлена", status: "success", duration: 2000 });
  };

  const handleRequestShipment = () => {
    // TODO: Реализовать запрос разрешения на отгрузку
    toast({ title: "Запрос на отгрузку отправлен", status: "info", duration: 2000 });
  };

  // Пример карточки товара для раздела Внутренний склад
  const mockStorageItems = [
    { id: 1, name: "Блок 1", dimensions: "200x100x50", imageUrl: "https://images.unsplash.com/photo-1623707795628-613cd31f8548?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxncmFuaXRlJTIwYmxvY2t8ZW58MHx8fHwxNzA5NjMzODczfDA&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 2, name: "Блок 2", dimensions: "150x150x100", imageUrl: "https://images.unsplash.com/photo-1568738351265-c7065f5d4293?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYXJibGUlMjBibG9ja3xlbnwwfHx8fDE3MDk2MzM4NzN8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  ];

  return (
    <Box p={4}>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Добавить позицию</Tab>
          <Tab>Внутренний склад</Tab>
          <Tab>Отгрузки</Tab>
          <Tab>Архив отгрузок</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <FormControl>
              <FormLabel>Название позиции</FormLabel>
              <Input placeholder="Введите название" />
              <FormLabel>Габариты</FormLabel>
              <Input placeholder="Введите габариты" />
              <FormLabel>Фото</FormLabel>
              <Input type="file" />
              <Button leftIcon={<FaPlus />} mt={4} onClick={handleAddItem}>
                Добавить
              </Button>
            </FormControl>
          </TabPanel>
          <TabPanel>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Название</Th>
                  <Th>Габариты</Th>
                  <Th>Фото</Th>
                  <Th>Действия</Th>
                </Tr>
              </Thead>
              <Tbody>
                {mockStorageItems.map((item) => (
                  <Tr key={item.id}>
                    <Td>{item.name}</Td>
                    <Td>{item.dimensions}</Td>
                    <Td>
                      <Image src={item.imageUrl} alt={item.name} boxSize="100px" objectFit="cover" />
                    </Td>
                    <Td>
                      <IconButton aria-label="Запросить отгрузку" icon={<FaUpload />} onClick={handleRequestShipment} />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TabPanel>
          <TabPanel>{/* TODO: Реализовать отображение предстоящих отгрузок */}</TabPanel>
          <TabPanel>{/* TODO: Реализовать отображение архива отгрузок */}</TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Index;
