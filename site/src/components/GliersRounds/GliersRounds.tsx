import { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { Routes } from '@/types/routes.d';
import PageTemplate from '../Common/PageTemplate';
import SeoComponent from '../Common/SEO';
import { Container, Typography, Box } from '@mui/material';
import { useWidthBlokSize } from '@/hook/useWidthBlockSize';
import { roundMemberData } from '@/libs/mockedData';
import { lyatoshinskiyData, revuckiyData } from '@/libs/mockedData';

const FIRST_ROUND_PERSENT = 30;
const SECOND_ROUND_PERSENT = 34;

const GliersRoundsPage: FC = () => {
  const { t } = useTranslation();
  const { containerRef, containerSize } = useWidthBlokSize();
  const title = t(`navigation.${Routes.GLIERS_ROUNDS}`);

  const elementWidth = Math.floor(containerSize * 0.1);

  const radiuses = [
    containerSize / 3.5,
    containerSize - 3.5 * elementWidth,
    Math.floor(containerSize - elementWidth),
  ];

  const dividedIntoGroup = (
    data: roundMemberData[],
    first: number,
    second: number
  ) => {
    const firstRoundCount = Math.round((data.length * first) / 100);
    const secondRoundCount = Math.round((data.length * second) / 100);
    const thirdRoundCount = data.length - firstRoundCount - secondRoundCount;

    const firstRoundMember = data.slice(0, firstRoundCount);
    const secondRoundMember = data.slice(
      firstRoundCount,
      firstRoundCount + secondRoundCount
    );
    const thirdRoundMember = data.slice(-thirdRoundCount);

    return [firstRoundMember, secondRoundMember, thirdRoundMember];
  };

  const lyatshinskiy = dividedIntoGroup(
    lyatoshinskiyData,

    FIRST_ROUND_PERSENT,
    SECOND_ROUND_PERSENT
  );
  const revuckiy = dividedIntoGroup(
    revuckiyData,
    FIRST_ROUND_PERSENT,
    SECOND_ROUND_PERSENT
  );

  const data = radiuses.map((radius, index) => {
    const groupCount = lyatshinskiy[index].length + revuckiy[index].length;
    const groupAngle = Math.round(360 / groupCount);

    return {
      radius: radius,
      angle: groupAngle,
      member: [...lyatshinskiy[index], ...revuckiy[index]],
    };
  });

  return (
    <>
      <SeoComponent
        canonicalUrl={`/${Routes.PROJECTS}/${Routes.GLIERS_ROUNDS}`}
        title={title}
      />
      <PageTemplate>
        <Container
          sx={{ marginBottom: { xs: 3, md: 5, lg: 6 } }}
          component="section"
        >
          <Typography
            variant="h1"
            sx={{
              textTransform: 'uppercase',
              marginBottom: { xs: 3, md: 5, lg: 6 },
              textAlign: 'center',
            }}
          >
            {title}
          </Typography>
          <Box
            sx={{
              width: '100%',
              aspectRatio: 1,
              height: 'auto',

              position: 'relative',
              borderRadius: '50%',
              border: '1px solid #000',
            }}
            ref={containerRef}
          >
            <Box
              sx={{
                aspectRatio: 1,
                height: 'auto',
                border: '1px solid #000',
                borderRadius: '50%',
                width: '20%',
                backgroundColor: '#E0E0E0',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 1000,
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: data[0].radius,
                height: data[0].radius,
                borderRadius: '50%',
                border: '1px solid grey',
                transform: 'translate(-50%, -50%) rotate(50deg)',
              }}
            >
              {data[0].member.map(({ color }, index) => (
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: elementWidth,
                    height: elementWidth,
                    margin: `-${elementWidth / 2}px`,

                    backgroundColor: color,
                    border: '1px solid #890973',
                    borderRadius: '50%',
                    transformOrigin: '50% 50%',
                    transform: `rotate(${
                      data[0].angle * (index + 2)
                    }deg) translate(0, ${data[0].radius / 2}px ) rotate(${
                      -data[0].angle * (index + 2) - 50
                    }deg)`,
                  }}
                  key={index}
                >
                  {index}
                </Box>
              ))}
            </Box>
            {data.slice(1).map(({ angle, member, radius }, i) => {
              const divider = i % 2 === 0 ? 3 : 6;
              return (
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: radius,
                    height: radius,
                    borderRadius: '50%',
                    border: '1px solid #ed42d0',
                    transform: `translate(-50%, -50%) rotate(${30}deg)`,
                  }}
                  key={i}
                >
                  {member.map(({ color }, index) => (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: elementWidth,
                        height: elementWidth,
                        margin: `-${elementWidth / 2}px`,

                        backgroundColor: color,
                        border: '1px solid #890973',
                        borderRadius: '50%',
                        transformOrigin: '50% 50%',
                        transform: `rotate(${
                          angle * (index + 2)
                        }deg) translate(0, ${
                          index % 2 === 0
                            ? radius / 2 - elementWidth / divider
                            : radius / 2 + elementWidth / divider
                        }px ) rotate(${-angle * (index + 2) - 40}deg)`,
                      }}
                      key={index}
                    >
                      {index}
                    </Box>
                  ))}
                </Box>
              );
            })}
          </Box>
        </Container>
      </PageTemplate>
    </>
  );
};

export default GliersRoundsPage;
