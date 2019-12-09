<?php
use PHPUnit\Framework\TestCase;

require_once 'src/Poneys.php';

/**
 * Classe de test de gestion de poneys
 */
class PoneysTest extends TestCase
{

    //private $poneys = NULL;
    public function setUp()
    {
	$this->poneys = new Poneys();
	$this->poneys->setCount(qtPoney);
	print('ouééééééé ');
    }

    public function tearDown()
    {
	$this->poneys = NULL;
	print('terminated');
    }

    /**
     * Undocumented function
     *
     * @dataProvider provider
     *
     * @return void
     */
    public function testRemovePoneyFromField(int $number, int $expected)
    {
        // Setup
        $Poneys = new Poneys();

        // Action
        $Poneys->removePoneyFromField($number);

        // Assert
	$this->assertEquals($expected, $Poneys->getCount());

    }

    public function testException()
    {
	$Poneys = new Poneys();
	$this->expectException(InvalidArgumentException::class);
	$Poneys->removePoneyFromField(9);
	$Poneys->removePoneyFromField(-1);
    }


    public function testgetNames()
    {
	$names = ['Twilight Sparkle','Rainbow Dash', 'Rarity', 'Applejack'];
	$this->poneys = $this->getMockBuilder('Poneys')->getMock();
	$this->poneys
		->expects($this->exactly(1))
		->method('getNames')
		->willReturn($names);
	$this->assertEquals($names, $this->poneys->getNames());
    }

    public function testAddPoneyToField()
    {
	// Setup
	$Poneys = new Poneys();
	  
	// Action
	$Poneys->addPoneyToField(3);

	//Assert
	$this->assertEquals(11, $Poneys->getCount());
    }

    public function testhaveSpace()
    {
	$Poneys = new Poneys();
	$this->assertTrue($Poneys->haveSpace(taillechamps));
	$Poneys->addPoneyToField(10);
	$this->assertFalse($Poneys->haveSpace(taillechamps));
    }


    public function provider()
    {
	 return [
		 [3,5],
		 [6,2]
	];
    }

}
?>
