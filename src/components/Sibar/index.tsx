import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import Image from "next/image";
import Button from "@mui/joy/Button";

export default function SidebarMarketplace() {
    const [expanded, setExpanded] = useState();

    const handleChange = (panel : any) => (event : any, isExpanded : any) => {
        setExpanded(isExpanded ? panel : false);
    };


    return (

        <Box className="SidebarMarketplace"
        >
            <Typography className='title-large' variant="h3">
                Filter
            </Typography>
            <Box className="accordion" sx={{ marginTop: '24px', color: 'white', '& .MuiPaper-root ': { background: 'transparent', borderBottom: '1px solid #ffffff1f' }, '& .MuiAccordionSummary-content': { margin: '32px 0' } }}>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<AddIcon sx={{ color: '#00ff29', fontSize: '3rem' }} />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        sx={{ padding: '0' }}
                    >
                        <Box sx={{ paddingRight:'1rem',flexShrink: 0, display: 'flex', alignItems: 'center', color: "white" }}>
                            <Image
                                src='/images/svg/RocketLaunch.svg'
                                width="32"
                                height="32"
                                alt=""
                                style={{ marginRight: '1rem' }}
                            />
                            <Typography sx={{}}>Status</Typography>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ color: 'white' }}>
                            Status
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<AddIcon sx={{ color: '#00ff29', fontSize: '3rem' }} />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                        sx={{ padding: '0' }}
                    >
                        <Box sx={{ paddingRight:'1rem',flexShrink: 0, display: 'flex', alignItems: 'center', color: "white" }}>
                            <Image
                                src='/images/svg/CurrencyCircleDollar.svg'
                                width="32"
                                height="32"
                                alt=""
                                style={{ marginRight: '1rem' }}
                            />
                            <Typography sx={{}}>Price</Typography>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ color: 'white' }}>
                            Price Range
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                        expandIcon={<AddIcon sx={{ color: '#00ff29', fontSize: '3rem' }} />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                        sx={{ padding: '0' }}
                    >
                        <Box sx={{ paddingRight:'1rem',flexShrink: 0, display: 'flex', alignItems: 'center', color: "white" }}>
                            <Image
                                src='/images/svg/Image.svg'
                                width="32"
                                height="32"
                                alt=""
                                style={{ marginRight: '1rem' }}
                            />
                            <Typography sx={{}}>Collection</Typography>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ color: 'white' }}>
                            Collection
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary
                        expandIcon={<AddIcon sx={{ color: '#00ff29', fontSize: '3rem' }} />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                        sx={{ padding: '0' }}
                    >
                        <Box sx={{ paddingRight:'1rem',flexShrink: 0, display: 'flex', alignItems: 'center', color: "white" }}>
                            <Image
                                src='/images/svg/Placeholder.svg'
                                width="32"
                                height="32"
                                alt=""
                                style={{ marginRight: '1rem' }}
                            />
                            <Typography sx={{}}>Blockchain</Typography>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ color: 'white' }}>
                            Blockchain
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary
                        expandIcon={<AddIcon sx={{ color: '#00ff29', fontSize: '3rem' }} />}
                        aria-controls="panel5bh-content"
                        id="panel5bh-header"
                        sx={{ padding: '0' }}
                    >
                        <Box sx={{ paddingRight:'1rem',flexShrink: 0, display: 'flex', alignItems: 'center', color: "white" }}>
                            <Image
                                src='/images/svg/Books.svg'
                                width="32"
                                height="32"
                                alt=""
                                style={{ marginRight: '1rem' }}
                            />
                            <Typography sx={{}}>File Type</Typography>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ color: 'white' }}>
                            File Type
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                    <AccordionSummary
                        expandIcon={<AddIcon sx={{ color: '#00ff29', fontSize: '3rem' }} />}
                        aria-controls="panel6bh-content"
                        id="panel6bh-header"
                        sx={{ padding: '0' }}
                    >
                        <Box sx={{ paddingRight:'1rem',flexShrink: 0, display: 'flex', alignItems: 'center', color: "white" }}>
                            <Image
                                src='/images/svg/SquaresFour.svg'
                                width="32"
                                height="32"
                                alt=""
                                style={{ marginRight: '1rem' }}
                            />
                            <Typography sx={{}}>Topic</Typography>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ color: 'white' }}>
                            Topic
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
            <Button
                variant="outlined"
                sx={{
                    borderRadius: "99px",
                    border: "2px solid rgba(255, 255, 255, 0.12)",
                    padding: '14px 20px',
                    fontWeight: '700',
                    fontSize: '16px',
                    lineHeight: '24px',
                    marginTop:'1.5rem',
                    width: "100%"
                }}
            >
                Reset
            </Button>
        </Box>

    );
}
