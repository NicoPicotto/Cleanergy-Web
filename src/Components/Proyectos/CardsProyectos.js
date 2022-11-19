import React from 'react';
import {
	Flex,
	Divider,
	Heading,
	useMediaQuery,
	useColorMode,
	Accordion,
	AccordionItem,
	Text,
	AccordionButton,
	Box,
	AccordionIcon,
	AccordionPanel,
	Image,
} from '@chakra-ui/react';

const CardsProyectos = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');
	const { colorMode } = useColorMode();

	return (
		<Flex justifyContent={'center'}>
			<Flex width={isMobile ? '90vw' : '70vw'} flexDir={'column'}>
				<Flex width={isMobile ? '90vw' : '70vw'} padding={5} flexDir={'column'}>
					<Heading
						fontFamily={'fonts.open'}
						color={'brand.secundario'}
						padding={2}
						size={isMobile ? 'md' : 'lg'}
						textAlign={isMobile && 'center'}
					>
						Proyectos Biogás
					</Heading>
					<Divider borderColor={'brand.terciario'} padding={2} />
				</Flex>
				<Flex
					justifyContent={'space-evenly'}
					alignItems={'center'}
					overflowX={'hidden'}
					marginBottom={5}
					flexDir={isMobile && 'column'}
					flexWrap={'wrap'}
				>
					<Box
						width={isMobile ? '90vw' : '30vw'}
						borderRadius={20}
						backdropFilter={'auto'}
						bgColor={colorMode === 'dark' ? '#1a202c' : 'white'}
						boxShadow='md'
						borderColor={colorMode === 'dark' && 'brand.secundario'}
						borderWidth={colorMode === 'dark' && 1}
						overflow={'hidden'}
						marginTop={5}
						marginBottom={5}
						transition={'0.3s'}
						_hover={{ boxShadow: 'lg' }}
					>
						<Box overflow={'hidden'}>
							<Image
								src='/assets/proyectoBiogas.webp'
								alt='Proyecto 3C Biogás'
								width={'100%'}
							/>
						</Box>
						<Flex
							padding={2}
							flexDir={'column'}
							justifyContent={'space-between'}
						>
							<Accordion allowToggle padding={1} borderColor={'transparent'}>
								<AccordionItem>
									<AccordionButton>
										<Flex
											alignItems={'center'}
											justifyContent={'space-between'}
											width={'100%'}
										>
											<Heading color={'brand.secundario'} fontSize={'xl'}>
												3C Biogás S.A.
											</Heading>
											<AccordionIcon color={'brand.terciario'} />
										</Flex>
									</AccordionButton>
									<AccordionPanel
										bgColor={colorMode === 'dark' ? '#1a202c' : 'white'}
										pb={4}
										fontFamily={'fonts.open'}
									>
										<Flex flexDir={'column'}>
											<Text fontSize={'sm'} marginBottom={4}>
												Proyecto adjudicado en RenovAr 2 en 2017, ubicado sobre
												Ruta E90 14km, zona rural de Alcira Gigena, provincia de
												Córdoba. 3C Biogás procesa 100 m3 por día de residuos
												orgánicos agroindustriales provenientes de las
												industrias alimenticias y establecimiento pecuarios de
												la zona, para producir energía eléctrica y digestato
												(fertilizante orgánico).
											</Text>
											<Text fontSize={'sm'}>
												• <Text as='u'>Habilitación comercial:</Text>{' '}
												11/12/2019.
											</Text>
											<Text fontSize={'sm'}>
												• <Text as='u'>Potencia contratada:</Text> 1MW.
											</Text>
											<Text fontSize={'sm'}>
												• <Text as='u'>Producción de energía:</Text> 24MWh/día.
											</Text>
											<Text fontSize={'sm'} marginBottom={4}>
												• <Text as='u'>Producción de digestato:</Text>{' '}
												100m3/día.
											</Text>
											<Text fontSize={'sm'}>
												<Text as='b'>Rol de Cleanergy:</Text> desarrollo del
												proyecto, gestión y supervisión de obra, puesta en
												marcha, gerenciamiento y operación integral de la planta
												(control biológico y fisicoquímico, logística de
												sustratos y mantenimiento).
											</Text>
										</Flex>
									</AccordionPanel>
								</AccordionItem>
							</Accordion>
						</Flex>
					</Box>
					<Box
						width={isMobile ? '90vw' : '30vw'}
						borderRadius={20}
						backdropFilter={'auto'}
						bgColor={colorMode === 'dark' ? '#1a202c' : 'white'}
						boxShadow='md'
						borderColor={colorMode === 'dark' && 'brand.secundario'}
						borderWidth={colorMode === 'dark' && 1}
						overflow={'hidden'}
						marginTop={5}
						marginBottom={5}
						transition={'0.3s'}
						_hover={{ boxShadow: 'lg' }}
					>
						<Box overflow={'hidden'}>
							<Image
								src='/assets/proyectoAlimentos.webp'
								alt='Alimentos Magros'
								width={'100%'}
							/>
						</Box>
						<Flex
							padding={2}
							flexDir={'column'}
							justifyContent={'space-between'}
						>
							<Accordion allowToggle padding={1} borderColor={'transparent'}>
								<AccordionItem>
									<AccordionButton>
										<Flex
											alignItems={'center'}
											justifyContent={'space-between'}
											width={'100%'}
										>
											<Heading color={'brand.secundario'} fontSize={'xl'}>
												Alimentos Magros
											</Heading>
											<AccordionIcon color={'brand.terciario'} />
										</Flex>
									</AccordionButton>
									<AccordionPanel
										bgColor={colorMode === 'dark' ? '#1a202c' : 'white'}
										pb={4}
										fontFamily={'fonts.open'}
									>
										<Flex flexDir={'column'}>
											<Text fontSize={'sm'} marginBottom={4}>
												Proyecto ubicado en Justiniano Posse, provincia de
												Córdoba. Alimentos Magros es un frigorífico de cerdos
												que procesa todos sus residuos orgánicos para
												autoabastecerse de energía eléctrica.
											</Text>
											<Text fontSize={'sm'}>
												• <Text as='u'>Inicio de operación:</Text> 01/01/2021.
											</Text>
											<Text fontSize={'sm'} marginBottom={4}>
												• <Text as='u'>Potencia instalada:</Text> 400kW.
											</Text>
											<Text fontSize={'sm'}>
												<Text as='b'>Rol de Cleanergy:</Text> reingeniería de
												planta, reformulación de receta, puesta en marcha,
												logística de sustratos, control biológico y
												físicoquímico.
											</Text>
										</Flex>
									</AccordionPanel>
								</AccordionItem>
							</Accordion>
						</Flex>
					</Box>
				</Flex>
				<Flex
					justifyContent={'space-evenly'}
					alignItems={'center'}
					overflowX={'hidden'}
					marginBottom={5}
					flexDir={isMobile && 'column'}
					flexWrap={'wrap'}
				>
					<Box
						width={isMobile ? '90vw' : '30vw'}
						borderRadius={20}
						backdropFilter={'auto'}
						bgColor={colorMode === 'dark' ? '#1a202c' : 'white'}
						boxShadow='md'
						borderColor={colorMode === 'dark' && 'brand.secundario'}
						borderWidth={colorMode === 'dark' && 1}
						overflow={'hidden'}
						marginTop={5}
						marginBottom={5}
						transition={'0.3s'}
						_hover={{ boxShadow: 'lg' }}
					>
						<Flex
							padding={2}
							flexDir={'column'}
							justifyContent={'space-between'}
						>
							<Accordion allowToggle padding={1} borderColor={'transparent'}>
								<AccordionItem>
									<AccordionButton>
										<Flex
											alignItems={'center'}
											justifyContent={'space-between'}
											width={'100%'}
										>
											<Heading color={'brand.secundario'} fontSize={'xl'}>
												CT Villa del Rosario
											</Heading>
											<AccordionIcon color={'brand.terciario'} />
										</Flex>
									</AccordionButton>
									<AccordionPanel
										bgColor={colorMode === 'dark' ? '#1a202c' : 'white'}
										pb={4}
										fontFamily={'fonts.open'}
									>
										<Flex flexDir={'column'}>
											<Text fontSize={'sm'} marginBottom={4}>
												Proyecto adjudicado en RenovAr 2 en 2017, desarrollado
												en Villa del Rosario, provincia de Córdoba. Este
												proyecto fue vendido y transferido antes del inicio de
												su construcción, actualmente ubicado en Río Cuarto bajo
												la razón social CGY Biogás 1 SA.
											</Text>
											<Text fontSize={'sm'} marginBottom={4}>
												• <Text as='u'>Potencia Contratada:</Text> 1MW.
											</Text>
											<Text fontSize={'sm'}>
												<Text as='b'>Rol de Cleanergy:</Text> desarrollo del
												proyecto, firma del PPA, y comercialización.
											</Text>
										</Flex>
									</AccordionPanel>
								</AccordionItem>
							</Accordion>
						</Flex>
					</Box>
					<Box
						width={isMobile ? '90vw' : '30vw'}
						borderRadius={20}
						backdropFilter={'auto'}
						bgColor={colorMode === 'dark' ? '#1a202c' : 'white'}
						boxShadow='md'
						borderColor={colorMode === 'dark' && 'brand.secundario'}
						borderWidth={colorMode === 'dark' && 1}
						overflow={'hidden'}
						marginTop={5}
						marginBottom={5}
						transition={'0.3s'}
						_hover={{ boxShadow: 'lg' }}
					>
						<Flex
							padding={2}
							flexDir={'column'}
							justifyContent={'space-between'}
						>
							<Accordion allowToggle padding={1} borderColor={'transparent'}>
								<AccordionItem>
									<AccordionButton>
										<Flex
											alignItems={'center'}
											justifyContent={'space-between'}
											width={'100%'}
										>
											<Heading color={'brand.secundario'} fontSize={'xl'}>
												CTBG Bell Ville
											</Heading>
											<AccordionIcon color={'brand.terciario'} />
										</Flex>
									</AccordionButton>
									<AccordionPanel
										bgColor={colorMode === 'dark' ? '#1a202c' : 'white'}
										pb={4}
										fontFamily={'fonts.open'}
									>
										<Flex flexDir={'column'}>
											<Text fontSize={'sm'} marginBottom={4}>
												Proyecto adjudicado en RenovAr 3 (MiniRen) en 2019,
												desarrollado en Bell Ville, provincia de Córdoba.
												Proyecto basado en el procesamiento de residuos
												orgánicos agroindustriales. En etapa de estructuración.
											</Text>
											<Text fontSize={'sm'} marginBottom={4}>
												• <Text as='u'>Potencia Contratada:</Text> 1,2MW.
											</Text>
											<Text fontSize={'sm'}>
												<Text as='b'>Rol de Cleanergy:</Text> desarrollo y
												gestión del proyecto hasta la firma del PPA.
											</Text>
										</Flex>
									</AccordionPanel>
								</AccordionItem>
							</Accordion>
						</Flex>
					</Box>
				</Flex>
				<Flex width={isMobile ? '90vw' : '70vw'} padding={5} flexDir={'column'}>
					<Heading
						fontFamily={'fonts.open'}
						color={'brand.primario'}
						padding={2}
						size={isMobile ? 'md' : 'lg'}
						textAlign={isMobile && 'center'}
					>
						Proyectos Energía Solar
					</Heading>
					<Divider borderColor={'brand.terciario'} padding={2} />
				</Flex>
				<Flex
					justifyContent={'space-evenly'}
					alignItems={'center'}
					overflowX={'hidden'}
					marginBottom={5}
					flexDir={isMobile && 'column'}
					flexWrap={'wrap'}
				>
					<Box
						width={isMobile ? '90vw' : '30vw'}
						borderRadius={20}
						backdropFilter={'auto'}
						bgColor={colorMode === 'dark' ? '#1a202c' : 'white'}
						boxShadow='md'
						borderColor={colorMode === 'dark' && 'brand.primario'}
						borderWidth={colorMode === 'dark' && 1}
						overflow={'hidden'}
						marginTop={5}
						marginBottom={5}
						transition={'0.3s'}
						_hover={{ boxShadow: 'lg' }}
					>
						<Box overflow={'hidden'}>
							<Image
								src='/assets/gastaldi.webp'
								alt='Proyecto 3C Biogás'
								width={'100%'}
							/>
						</Box>
						<Flex
							padding={2}
							flexDir={'column'}
							justifyContent={'space-between'}
						>
							<Accordion allowToggle padding={1} borderColor={'transparent'}>
								<AccordionItem>
									<AccordionButton>
										<Flex
											alignItems={'center'}
											justifyContent={'space-between'}
											width={'100%'}
										>
											<Heading color={'brand.primario'} fontSize={'xl'}>
												Gastaldi Hnos - 10kW
											</Heading>
											<AccordionIcon color={'brand.terciario'} />
										</Flex>
									</AccordionButton>
									<AccordionPanel
										bgColor={colorMode === 'dark' ? '#1a202c' : 'white'}
										pb={4}
										fontFamily={'fonts.open'}
									>
										<Flex flexDir={'column'}>
											<Text fontSize={'sm'} marginBottom={4}>
												Proyecto fotovoltaico on grid instalado en la sede
												administrativa de Gastaldi Hnos, ubicado en General
												Deheza.
											</Text>
											<Text fontSize={'sm'}>
												<Text as='b'>Rol de Cleanergy:</Text> diseño y gestión
												del proyecto.
											</Text>
										</Flex>
									</AccordionPanel>
								</AccordionItem>
							</Accordion>
						</Flex>
					</Box>
					<Box
						width={isMobile ? '90vw' : '30vw'}
						borderRadius={20}
						backdropFilter={'auto'}
						bgColor={colorMode === 'dark' ? '#1a202c' : 'white'}
						boxShadow='md'
						borderColor={colorMode === 'dark' && 'brand.primario'}
						borderWidth={colorMode === 'dark' && 1}
						overflow={'hidden'}
						marginTop={5}
						marginBottom={5}
						transition={'0.3s'}
						_hover={{ boxShadow: 'lg' }}
					>
						<Box overflow={'hidden'}>
							<Image
								src='/assets/ponzio.webp'
								alt='Proyecto 3C Biogás'
								width={'100%'}
							/>
						</Box>
						<Flex
							padding={2}
							flexDir={'column'}
							justifyContent={'space-between'}
						>
							<Accordion allowToggle padding={1} borderColor={'transparent'}>
								<AccordionItem>
									<AccordionButton>
										<Flex
											alignItems={'center'}
											justifyContent={'space-between'}
											width={'100%'}
										>
											<Heading color={'brand.primario'} fontSize={'xl'}>
												Zona rural - 3kW
											</Heading>
											<AccordionIcon color={'brand.terciario'} />
										</Flex>
									</AccordionButton>
									<AccordionPanel
										bgColor={colorMode === 'dark' ? '#1a202c' : 'white'}
										pb={4}
										fontFamily={'fonts.open'}
									>
										<Flex flexDir={'column'}>
											<Text fontSize={'sm'} marginBottom={4}>
												Proyecto fotovoltaico off grid instalado en zona rural
												de General Cabrera.
											</Text>
											<Text fontSize={'sm'}>
												<Text as='b'>Rol de Cleanergy:</Text> diseño y gestión
												del proyecto.
											</Text>
										</Flex>
									</AccordionPanel>
								</AccordionItem>
							</Accordion>
						</Flex>
					</Box>
					<Box
						width={isMobile ? '90vw' : '30vw'}
						borderRadius={20}
						backdropFilter={'auto'}
						bgColor={colorMode === 'dark' ? '#1a202c' : 'white'}
						boxShadow='md'
						borderColor={colorMode === 'dark' && 'brand.primario'}
						borderWidth={colorMode === 'dark' && 1}
						overflow={'hidden'}
						marginTop={5}
						marginBottom={5}
						transition={'0.3s'}
						_hover={{ boxShadow: 'lg' }}
					>
						<Box overflow={'hidden'}>
							<Image
								src='/assets/llanes.webp'
								alt='Proyecto 3C Biogás'
								width={'100%'}
							/>
						</Box>
						<Flex
							padding={2}
							flexDir={'column'}
							justifyContent={'space-between'}
						>
							<Accordion allowToggle padding={1} borderColor={'transparent'}>
								<AccordionItem>
									<AccordionButton>
										<Flex
											alignItems={'center'}
											justifyContent={'space-between'}
											width={'100%'}
										>
											<Heading color={'brand.primario'} fontSize={'xl'}>
												Corcecoop SA - 20kW
											</Heading>
											<AccordionIcon color={'brand.terciario'} />
										</Flex>
									</AccordionButton>
									<AccordionPanel
										bgColor={colorMode === 'dark' ? '#1a202c' : 'white'}
										pb={4}
										fontFamily={'fonts.open'}
									>
										<Flex flexDir={'column'}>
											<Text fontSize={'sm'} marginBottom={4}>
												Proyecto fotovoltaico on grid instalado en criadero de
												cerdos de Corcecoop SA, zona rural de General Cabrera.
											</Text>
											<Text fontSize={'sm'}>
												<Text as='b'>Rol de Cleanergy:</Text> diseño y gestión
												del proyecto.
											</Text>
										</Flex>
									</AccordionPanel>
								</AccordionItem>
							</Accordion>
						</Flex>
					</Box>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default CardsProyectos;
